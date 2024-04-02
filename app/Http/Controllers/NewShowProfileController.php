<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Newuser;

class NewShowProfileController extends Controller
{
    //
    function showPage()
    {
        return Inertia::render("NewShowProfile");
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
                // 'password' => 'sometimes|min:8',
            ]);

            // $validatedData['password'] = Hash::make($request->password);

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
}
