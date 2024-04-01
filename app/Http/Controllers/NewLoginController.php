<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Newuser;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class NewLoginController extends Controller
{
    //
    function showPage(){
        return Inertia::render('NewLogin');
    }

    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);
        
            $user = Newuser::where('email', $credentials['email'])->first();
        
            if (!$user) {
                return response()->json(['message' => 'No user found with this email address'], 404);
            }
        
            if (!Hash::check($credentials['password'], $user->password)) {
                return response()->json(['message' => 'Incorrect password'], 401);
            }
        
            Auth::login($user);
            $request->session()->regenerate();
        
            return response()->json(['message' => 'User logged in successfully'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return response()->json(['message' => 'User logged out successfully'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
