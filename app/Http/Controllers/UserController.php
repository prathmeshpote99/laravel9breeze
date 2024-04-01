<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Newuser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function show()
    {
        return "Hello World!";
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

    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();

                return response()->json(['message' => 'User logged in successfully'], 200);
            }

            return response()->json(['message' => 'Invalid credentials'], 401);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function findAllUsers()
    {
        try {
            $users = Newuser::all();

            return response()->json(['users' => $users], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function findUser(Request $request)
    {
        try {
            $user = Auth::user();

            return response()->json(['user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function updateUser(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'first_name' => 'sometimes',
                'last_name' => 'sometimes',
                'age' => 'sometimes',
                'email' => 'sometimes|email|unique:newusers,email,' . Auth::id(),
                'password' => 'sometimes|min:8',
            ]);

            $validatedData['password'] = Hash::make($request->password);

            $user = Newuser::find(Auth::id());
            $user->fill($validatedData);
            $user->save();

            return response()->json([
                'message' => "User updated successfully",
                'user' => $user
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function deleteUser(Request $request)
    {
        try {
            $user = Newuser::find(Auth::id());
            $user->delete();

            return response()->json(['message' => 'User deleted successfully'], 200);
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
