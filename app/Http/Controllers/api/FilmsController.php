<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Film;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FilmsController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'      => 'required|string|max:255',
            'description'     => 'required',
            'image_thumbnail'  => 'required|image|mimes:jpg,jpeg,png,gif|max:2048'
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => $validator->errors()
            ], 400);
        }

        $image = $request->file('image_thumbnail');
        $imageName = time().'_'.$image->getClientOriginalName();
        $image->storeAs('public/image', $imageName);

        $url = Storage::url('public/image/'.$imageName);

        Film::create([
            'title' => $request['title'],
            'description' => $request['description'],
            'image_name' => $imageName,
            'image_thumbnail' => $url
        ]);

        return response()->json(["message" => "successfully store"], 201);
    }

    public function index(): JsonResponse
    {
        $films = Film::all();

        return response()->json([
            "data" => $films
        ]);
    }

    public function show(Film $id): JsonResponse
    {
        if($id) {
        $film = $id;

        return response()->json([
            "data" => $film
        ]);
        }else{
        return response()->json([
            "message" => "data not found"
        ]);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => 'validate error',
                "error" => $validator->errors()
            ], 400);
        }

        $film = Film::findOrFail($id);

        if($request->hasFile('image_thumbnail')) {
            Storage::delete('public/image/'.basename($film->image_name));

            $image = $request->file('image_thumbnail');
            $imageName = time().'_'.$image->getClientOriginalName();
            $image->storeAs('public/image', $imageName);
            
            $url = Storage::url('public/image/'.$imageName);
            $film->update([
                'title' => $request['title'],
                'description' => $request['description'],
                'image_name' => $imageName,
                'image_thumbnail' => $url
            ]);

            return response()->json([
                'message'  => 'successfuly updated'
            ], 200);
        }

        $film->update([
            'title' => $request['title'],
            'description' => $request['description']
        ]);

        return response()->json([
            'message'  => 'successfuly updated'
        ]);
    }

    public function destroy(Film $id): JsonResponse
    {
        Storage::delete('public/image/'.basename($id->image_name));
        $id->delete();

        return response()->json([
            'message' => "successfuly deleted"
        ], 200);
    }
}
