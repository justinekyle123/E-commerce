<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function home() : Response
    {
        return Inertia::render('Home');
    }
}
