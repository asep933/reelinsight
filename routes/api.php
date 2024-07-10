<?php

use App\Http\Controllers\api\FilmsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(FilmsController::class)->group(function() {
    Route::get('/films', 'index');
    Route::post('/films', 'store');
    Route::get('/films/{id}', 'show');
    Route::post('/films/update/{id}', 'update');
    Route::delete('/films/delete/{id}', 'destroy');
    Route::get('/films/search/{slug}', 'search');
});