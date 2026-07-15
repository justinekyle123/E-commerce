// import React from 'react'

import { Product } from "@/types";
import { FaBeer } from "react-icons/fa";
import { Link, router } from "@inertiajs/react";
import { HiShoppingCart } from "react-icons/hi";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface ProductCardProps{
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {

    const handleAddtoCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        router.post("/cart/add", {product_id: product.id, quantity: 1},
        {
          preserveScroll: true,
        }
      );
    };

     const handleKeyDown = (e: React.KeyboardEvent) => {
       if(e.key === "Enter" || e.key === " "){
            router.post("/cart/add", {product_id: product.id, quantity: 1},
          {
            preserveScroll: true,
          })
       }
        
    }

  return (
    <article className="relative bg-white border border-gray-100 overflow-hidden
    transition-shadow group rounded-xl hover:shadow-xl">
      {product.is_new &&(
        <span className="absolute z-10 px-2 py-1 text-xs font-medium text-white rounded top-3
        left-3 bg-primary-400">
            new arrival
        </span>
      )}

      <Link href={' /products/${product.slug}' } className="block">
        <div className="relative overflow-hidden aspect-square bg-gray-50">
            <img 
            src={product.image}
           alt={product.name} 
           className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
        </div>
         <div className="py-4 px-2">
              {product.brand && (
              <p className="mb-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                {product.brand}
              </p>)}
             <h3 className="mb-2 font-medium text-gray-900 line-clamp-1">
                {product.name}
             </h3>
             <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-primary-600">
                   SGD {Number(product.price).toFixed(2)}
                </p>
                {product.stock > 0 && product.stock <= 15 && (
                  <span className="text-xs text-amber-600">
                    {product.stock} items left
                  </span>
                )}
             </div>
          </div>
      </Link>
        <div className="px-2 pb-4">
          <button   
          onClick={handleAddtoCart}
          onKeyDown={handleKeyDown}
          type="button" disabled={product.stock === 0}
          className="disabled:cursor-not-allowed disabled:bg-gray-300 flex items-center justify-center
          w-full gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg
          transition-colors hover:bg-primary-700 " >
              <ShoppingCart className="w-4 h-4"/>
              {product.stock == 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
    </article>
  )
}

export default ProductCard