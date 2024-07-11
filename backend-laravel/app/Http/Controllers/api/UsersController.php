<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'username'      => 'required|string|max:255',
            'email'     => 'required|string|max:255|unique:users',
            'password'  => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => $validator->errors()
            ]);
        }

        $password = Hash::make($request->input('password'));
        $user = User::create([
            'name' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => $password,
        ]);

        $token = $user->createToken('reel_insight')->plainTextToken;

        

        return response()->json([
            "message" => "successfuly register!",
            "data" => $user,
            "token" => $token,
            "access_type" => "Bearer"
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        Validator::make($request->all(), [
            'email'     => 'required|string|max:255|unique:users',
            'password'  => 'required|string'
        ]);

        $credentials = $request->only('email', 'password');

        if(! Auth::attempt($credentials)) {
            return response()->json([
                "message" => "kata sandi atau email tidak ditemukan"
            ], 401);
        }    

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('reel_insight')->plainTextToken;

        return response()->json([
            "message" => "successfuly login!",
            "token" => $token,
            "token_type" => "Bearer"
        ], 200);
    }
    
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(["message" => "successfuly logout!"], 200);
    }
}
