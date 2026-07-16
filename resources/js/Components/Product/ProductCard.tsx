import { Product } from "@/types";
import { Link, router } from "@inertiajs/react";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddtoCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.post(
      "/cart/add",
      { product_id: product.id, quantity: 1 },
      { preserveScroll: true }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      router.post(
        "/cart/add",
        { product_id: product.id, quantity: 1 },
        { preserveScroll: true }
      );
    }
  };

  return (
    <article
      className="relative flex flex-col bg-white border border-gray-200/70 rounded-2xl overflow-hidden
                 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group"
    >
      {/* New arrival badge */}
      {product.is_new && (
        <span
          className="absolute z-10 px-3 py-1 text-xs font-semibold text-white bg-primary-500
                     rounded-full shadow-sm top-3 left-3"
        >
          New arrival
        </span>
      )}

      <Link href={`/products/${product.slug}`} className="block flex-1">
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 ease-out
                       group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle overlay on image hover */}
          <div
            className="absolute inset-0 bg-black/0 transition-colors duration-300
                       group-hover:bg-black/5"
          />
        </div>

        <div className="p-4 space-y-2">
          {product.brand && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {product.brand}
            </p>
          )}
          <h3 className="font-medium text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-primary-600">
              SGD {Number(product.price).toFixed(2)}
            </p>
            {product.stock > 0 && product.stock <= 15 && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                {product.stock} left
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={handleAddtoCart}
          onKeyDown={handleKeyDown}
          type="button"
          disabled={product.stock === 0}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold
                     text-white bg-primary-600 rounded-xl transition-all duration-200
                     hover:bg-primary-700 hover:shadow-md active:scale-[0.98]
                     focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-600
                     disabled:hover:shadow-none disabled:active:scale-100"
        >
          <ShoppingCart className="w-4 h-4" />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;