<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewLoginController extends Controller
{
    //
    function showPage(){
        return Inertia::render('NewLogin');
    }
}
