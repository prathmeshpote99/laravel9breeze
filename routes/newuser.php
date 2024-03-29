<?php
use App\Http\Controllers\NewRegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [NewRegisterController::class, 'showPage']);