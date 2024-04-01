<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\Newuser;

class NewRegisterController extends Controller
{
    //
    function showPage()
    {
        return Inertia::render('NewRegister');
    }

    public function register(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'age' => 'required',
                'email' => 'required|email|unique:newusers,email',
                'password' => 'required|min:8',
            ]);

            $validatedData['password'] = Hash::make($request->password);

            $user = Newuser::create($validatedData);

            return response()->json([
                'message' => "User created successfully",
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
