// import React from 'react'

import { Product } from "@/types"
import ProductCard from "./ProductCard";

interface ProductGridProps {
    products: Product[];
    title?: string;
}

const ProductGrid = ({products, title}: ProductGridProps) => {
  if(products.length === 0){
    return <div className="py-12 text-center">
        <p className="text-gray-500">No products found.</p>
    </div>
  }
  return <section>
        {title && (
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
            {title}
        </h2>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />))}
        </div>
    </section>
};

export default ProductGrid