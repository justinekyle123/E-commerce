import MainLayout from "@/Components/Layout/MainLayout";
import ProductGrid from "@/Components/Product/ProductGrid";
import { Product } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HomeProps {
  featuredProducts: Product[];
  newProducts: Product[];
}

const Home = ({ featuredProducts, newProducts }: HomeProps) => {
  return (
    <MainLayout>
      <Head title="Home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[80vh] flex items-center">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[-30%] right-[-10%] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-4000" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-primary-300 bg-primary-500/20 rounded-full backdrop-blur-sm border border-primary-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              New Collection 2026
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Simple <br />
              <span className="text-primary-400 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                E-commerce
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Discover our curated collection of premium clothing.
              Quality meets minimalist design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-600/30 transition-all duration-300 hover:bg-primary-700 hover:shadow-primary-700/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full" />
              New Arrivals
            </h2>
            <p className="text-sm text-gray-500 mt-1">Fresh styles just added</p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-all hover:text-primary-700"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid products={newProducts} />
      </section>

      {/* Featured Products Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-gray-100/80">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full" />
              Featured Products
            </h2>
            <p className="text-sm text-gray-500 mt-1">Handpicked for you</p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-all hover:text-primary-700"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid products={newProducts} />
      </section>
    </MainLayout>
  );
};

export default Home;