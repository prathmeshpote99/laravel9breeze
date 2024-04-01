<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Newuser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewUserListController extends Controller
{
    //
    function showPage()
    {
        return Inertia::render('NewUsersList');
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
}
