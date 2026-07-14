<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function home() : Response
    {
        $featuredProducts = Product::where("is_featured", true)->take(4)->get();

        $newProducts = Product::where("is_new", true)->take(4)->get();

        return Inertia::render('Home', ["is_featured" => $featuredProducts, "newProducts" => $newProducts]);
    }
}
