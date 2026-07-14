// import React from 'react'

import { Product } from "@/types";
import { FaBeer } from "react-icons/fa";
import { Link } from "@inertiajs/react";

interface ProductCardProps{
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <article className="relative bg-white border border-gray-100 overflow-hidden
    transition-shadow group rounded-xl hover:shadow-xl">
      {product.is_new &&(
        <span className="absolute z-10 px-2 py-1 text-xs font-medium text-white rounded top-3
        left-3 bg-primary-400">
            new arrival
        </span>
      )}

      <Link href={"/products/${product.slug}" } className="block">
        <div className="relative overflow-hidden aspect-square bg-gray-50">
            <img 
            src={product.image}
           alt="" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
        </div>
      </Link>
    </article>
  )
}

export default ProductCard