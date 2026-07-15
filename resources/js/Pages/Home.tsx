import MainLayout from "@/Components/Layout/MainLayout";
import ProductGrid from "@/Components/Product/ProductGrid";
import { Product } from "@/types";
import { Head, Link } from "@inertiajs/react";


interface HomeProps{
    featuredProducts: Product[];
    newProducts: Product[];
}

const Home = ({featuredProducts, newProducts}: HomeProps) => {
    return (
        <MainLayout>
            <Head title="Home" />
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg[linear-gradient(45deg, transparent_25%, 
                    rgba(8,145,178,0,1)_50%, transparent_75%)]" />
                </div>
                <div className="relative px-4 py-24 mx-w max-w-7xl sm:px-6 lg:px-8 lg:py-32">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-white
                        sm:text-5xl lg:text-6xl">Simple <br />
                            <span className="text-primary-400">E-commerce</span>
                        </h1>
                        <p className="mt-6 text-gray-300 text-lg">
                            Discover our curated collection of premium clothing.
                            Quality meets minimalist design.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="" className="inline-flex items-center gap-2 px-6 bg-primary-400
                            rounded-lg text-white py-3 transition-colors hover:bg-primary-500">
                            {""}
                            Shop Now
                            </Link>
                            <Link href="" className="inline-flex items-center gap-2 px-6 bg-primary-400
                            rounded-lg text-white py-3 transition-colors hover:bg-primary-500">
                            {""}
                            View Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>           
           
            <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
                    <Link 
                        href={"/products"}
                        className="inline-flex items-center gap-1 text-sm font-medium
                        transition-colors text-primary-600 hover:text-primary-700">
                        View All
                    </Link>
                </div>               
                <ProductGrid products={newProducts}/>
            </section>

             <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Featured Products
                    </h2>
                    <Link 
                        href={"/products"}
                        className="inline-flex items-center gap-1 text-sm font-medium
                        transition-colors text-primary-600 hover:text-primary-700">
                        View All
                    </Link>
                </div>               
                <ProductGrid products={newProducts}/>
            </section>

        </MainLayout>
    );
};

export default Home;