<?php

use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;

Route::get('/' , function(): View{
    return view('home');
})->name('home');

// Route::get('/tokens/create', function (Request $request) {
//     $token = $request->user()->createToken('Api token');

//     return ['token' => $token->plainTextToken];
// });

Route::middleware('verified')->resource('users' , UserController::class)->only(['index']);
