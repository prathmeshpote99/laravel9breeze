<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewUserListController extends Controller
{
    //
    function showPage(){
        return Inertia::render('NewUsersList');
    }
}
