<?php
use App\Http\Controllers\NewLoginController;
use App\Http\Controllers\NewRegisterController;
use App\Http\Controllers\NewShowProfileController;
use App\Http\Controllers\NewUserListController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [NewRegisterController::class, 'showPage']);
Route::post('/register', [NewRegisterController::class, 'register']);

Route::get('/login', [NewLoginController::class, 'showPage']);
Route::post('/login', [NewLoginController::class, 'login']);
Route::get('/logout', [NewLoginController::class, 'logout']);

Route::get('/list', [NewUserListController::class, 'showPage']);
Route::get('/findall', [NewUserListController::class, 'findAllUsers']);

Route::get('/my-account', [NewShowProfileController::class, 'showPage']);
Route::get('/finduser', [NewShowProfileController::class, 'findUser']);
Route::put('/update', [NewShowProfileController::class, 'updateUser']);
Route::delete('/delete', [NewShowProfileController::class, 'deleteUser']);
