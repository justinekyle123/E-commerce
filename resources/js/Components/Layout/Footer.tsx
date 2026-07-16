import { Link } from "@inertiajs/react";
import { Home, Package, ShoppingCart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-primary-600/30">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-white transition-transform duration-200 hover:scale-105"
            >
              KyleStore
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              A modern e-commerce demo built with Laravel and React. Integrated with
              HitPay for seamless payment processing.
            </p>
            {/* Decorative divider */}
            <div className="w-12 h-0.5 bg-primary-500 rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Home className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">
                    Home
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Package className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">
                    Products
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <ShoppingCart className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">
                    Cart
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* (Optional) Placeholder for extra column – you can replace with newsletter or social icons */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {/* Placeholder social icons – no functionality, just UI */}
              <span className="w-9 h-9 rounded-full bg-gray-800/60 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 cursor-default">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-gray-800/60 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 cursor-default">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </span>
              <span className="w-9 h-9 rounded-full bg-gray-800/60 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 cursor-default">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Back to Top */}
      <div className="border-t border-gray-800/60 bg-gray-950/30">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} KyleStore. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-primary-400 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;