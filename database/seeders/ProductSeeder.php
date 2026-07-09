<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Fender Stratocaster',
                'slug' => Str::slug('Fender Stratocaster'),
                'description' => 'Classic electric guitar with bright tone and smooth playability.',
                'price' => 45999.00,
                'image' => '',
                'category' => 'Electric Guitar',
                'brand' => 'Fender',
                'stock' => 10,
                'is_featured' => true,
                'is_new' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Yamaha F310',
                'slug' => Str::slug('Yamaha F310'),
                'description' => 'Affordable acoustic guitar perfect for beginners.',
                'price' => 8999.00,
                'image' => '',
                'category' => 'Acoustic Guitar',
                'brand' => 'Yamaha',
                'stock' => 20,
                'is_featured' => true,
                'is_new' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ibanez GRG170DX',
                'slug' => Str::slug('Ibanez GRG170DX'),
                'description' => 'Versatile electric guitar suitable for rock and metal.',
                'price' => 16999.00,
                'image' => '',
                'category' => 'Electric Guitar',
                'brand' => 'Ibanez',
                'stock' => 15,
                'is_featured' => false,
                'is_new' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Taylor GS Mini',
                'slug' => Str::slug('Taylor GS Mini'),
                'description' => 'Compact acoustic guitar with premium sound quality.',
                'price' => 34999.00,
                'image' => '',
                'category' => 'Acoustic Guitar',
                'brand' => 'Taylor',
                'stock' => 8,
                'is_featured' => true,
                'is_new' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Epiphone Les Paul Standard',
                'slug' => Str::slug('Epiphone Les Paul Standard'),
                'description' => 'Iconic electric guitar delivering warm and powerful tones.',
                'price' => 28999.00,
                'image' => '',
                'category' => 'Electric Guitar',
                'brand' => 'Epiphone',
                'stock' => 12,
                'is_featured' => false,
                'is_new' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach($products as $product) {
            Product::create([
                ...$product,
                'slug' => Str::slug($product['name']),
            ]);
        }
    }
}