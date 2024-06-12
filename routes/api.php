<?php

use App\Http\Controllers\api\FilmsController;
use App\Http\Controllers\api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/users/register', [UsersController::class, 'register']);
Route::post('/users/signin', [UsersController::class, 'login']);


Route::controller(FilmsController::class)->group(function() {
    Route::post('/films', 'store');
    Route::get('/films', 'index');
    Route::get('/films/{id}', 'show');
    Route::post('/films/update/{id}', 'update');
    Route::delete('/films/delete/{id}', 'destroy');
});
    
    
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
        });
    Route::post('/users/logout', [UsersController::class, 'logout']);
});