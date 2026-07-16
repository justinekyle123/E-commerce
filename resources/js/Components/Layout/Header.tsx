import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { PageProps } from "@/types";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const { cart = [] } = usePage().props as unknown as PageProps;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/60 shadow-sm transition-shadow duration-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 tracking-tight hover:scale-105 transition-transform duration-200"
            >
              KyleStore
            </Link>
            <nav className="hidden sm:flex sm:items-center sm:gap-6" role="navigation">
              <Link
                href={"/"}
                className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSearchToggle}
              type="button"
              className="p-2 text-gray-600 rounded-full transition-all duration-200 hover:text-primary-600 hover:bg-primary-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href={"/cart"}
              className="relative p-2 text-gray-600 rounded-full transition-all duration-200 hover:text-primary-600 hover:bg-primary-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary-600 rounded-full shadow-sm ring-2 ring-white animate-pulse-once">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={handleMenuToggle}
              type="button"
              className="sm:hidden p-2 text-gray-600 rounded-full transition-all duration-200 hover:text-primary-600 hover:bg-primary-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar – slide & fade */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchOpen ? "max-h-24 opacity-100 py-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2.5 pl-10 pr-4 text-gray-800 placeholder-gray-400 bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-300/50 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Mobile Menu – slide from top with fade */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
            isMenuOpen ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-3" role="navigation" aria-label="Mobile navigation">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600 hover:pl-1"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600 hover:pl-1"
            >
              Products
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;