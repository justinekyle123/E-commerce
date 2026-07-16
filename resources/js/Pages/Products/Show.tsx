import MainLayout from "@/Components/Layout/MainLayout";
import ProductGrid from "@/Components/Product/ProductGrid";
import { Product } from "@/types"
import {Head, Link, router} from "@inertiajs/react"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductShowProps{
    product: Product;
    relatedProducts: Product[];
}

const ProductShow = ({product, relatedProducts}: ProductShowProps) => {

  const [quantity, setQuantity] = useState(1);

           //        Handlers  //
  const handleQuantityChange = (delta: number) => {
    const  newQuantity = quantity + delta;
        if(newQuantity >= 1 && newQuantity <= product.stock){
            setQuantity(newQuantity);
        }
  }
 const handleAddToCart = () => {
    router.post(
      "cart/add",
      {product_id: product.id, quantity},
      {
        preserveScroll: true,
      }
    );
  }
  return (
    <MainLayout>
        <Head title={product.name} />

        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="mb-6 mt-2">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href={"/"}
                className="text-gray-500 hover:text-primary-600">
                    Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href={""}
                className="text-gray-500 hover:text-primary-600">Products</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link className="font-medium text-gray-900 truncate max-2-[200px]">
                  {product.name}
                </Link>
              </li>
            </ol>
          </nav>

            <Link href={'/products'} className="inline-flex items-center gap-2 mb-6 text-sm
            text-gray-600 transition-colors  hover:text-primary-600">
              <ArrowLeft  className="w-4 h-4"/>
              Back to Products
            </Link>

            <div className="grid gap-8 lg:grid-cols-2"> 
              <div className="relative overflow-hidden bg-gray-50 rounded-2xl aspect-square">
                  {product.is_new && (
                  <span
                    className="absolute z-10 px-3 py-1 text-xs font-semibold text-white bg-primary-500
                              rounded-full shadow-sm top-3 left-3"
                  >
                    New arrival
                  </span>
                )}
                  <img src={product.image} alt={product.name} 
                  className="object-cover w-full h-full"/>
                </div>
                 <div className="flex flex-col">
              {product.brand && (
                <p className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </p>
              )}
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl mb-6 font-bold text-primary-600">
                SGD {Number(product.price).toFixed(2)}
              </p>
              <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 
                  text-sm font-medium rounded-full ${
                     product.stock > 10 
                      ? "bg-green-100 text-green-800" 
                      : product.stock > 0
                      ? 'bg-amber-100 text-amber-800' 
                      : "bg-red-100 text-red-800"
                  }`}>
                      {product.stock > 10 
                      ? "In Stock" 
                      : product.stock > 0
                      ? `Only ${product.stock} left`
                      : "Out of Stock"}
                  </span>
              </div>
                <p className="mb-8 leading-relaxed text-gray-600">
                      {product.description}
                </p>
                <div className="flex flex-cols gap-4 sm:flex-row">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                          <button className="text-gray-600 transition-colors 
                          hover:text-primary-600 disabled:text-gray-300 
                          disabled:cursor-not-allowed" tabIndex={0}
                          onClick={() => handleQuantityChange(-1)}>
                              <Minus className="w-4 h-4"/>
                          </button>
                            <span className="w-12 text-center font-medium
                            text-gray-900">
                                {""}
                                {quantity}
                            </span>
                           <button className="text-gray-600 transition-colors 
                           hover:text-primary-600 disabled:text-gray-300 
                           disabled:cursor-not-allowed"
                           onClick={() => handleQuantityChange(1)}>
                              <Plus className="w-4 h-4"/>
                          </button>
                      </div>
                    <button onClick={handleAddToCart}
                     type="button"
                     disabled={product.stock === 0}
                     className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold
                     text-white bg-primary-600 rounded-xl transition-all duration-200
                     hover:bg-primary-700 hover:shadow-md active:scale-[0.98]
                     focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-600
                     disabled:hover:shadow-none disabled:active:scale-100">
                      <ShoppingCart className="w-4 h-4"/>
                      {product.stock === 0
                          ? "Out of Stock"
                          : "Add to Cart"
                      }
                    </button>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-300">
                  <div className="space-y-3">
                      <div className="flex gap-2 text-sm">
                        <dt className="font-medium text-gray-900">Category</dt>
                        <dd className="text-gray-600">{product.category}</dd>
                      </div>
                      {product.brand &&(
                        <div className="flex gap-2 text-sm">
                            <dt className="font-medium text-gray-900">Brand:</dt>
                            <dd className="text-gray-600">{product.brand}</dd>
                        </div>
                      )}
                  </div>
                </div>
             </div>
            </div>

            {relatedProducts.length > 0 && (
              <section className="mt-16">
                  <h2 className="text-2xl mb-8 font-bold text-gray-900">
                    Related Products
                  </h2>
                  <ProductGrid products={relatedProducts}/>
              </section>
            )}
        </div>
    </MainLayout>
  )
}

export default ProductShow