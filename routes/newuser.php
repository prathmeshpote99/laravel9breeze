<?php
use App\Http\Controllers\NewLoginController;
use App\Http\Controllers\NewRegisterController;
use App\Http\Controllers\NewUserListController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [NewRegisterController::class, 'showPage']);
Route::get('/login', [NewLoginController::class, 'showPage']);
Route::get('/list', [NewUserListController::class, 'showPage']);