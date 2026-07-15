import {Link, usePage} from "@inertiajs/react"
import {useState} from "react" 
import { PageProps } from "@/types"
import { Search, ShoppingCart, Menu, X } from "lucide-react";


const Header = () => {

    // Avoid generic constraint mismatch by casting props to the local PageProps type
    const {cart = []} = usePage().props as unknown as PageProps;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity,0);

    // Handler Function

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100"> 
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="" className="text-2xl font-bold text-primary-600">
                            KyleStore
                        </Link>
                        <nav className="hidden sm:flex sm:items-center sm:gap-6" role="navigation">
                            <Link 
                            href={"/"}
                            className="text-sm font-medium text-gray-700 transition-colors 
                            hover:text-primary-600">
                                Home
                            </Link>
                            <Link className="text-sm font-medium text-gray-700 transition-colors 
                            hover:text-primary-600">
                                Product
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <button 
                        onClick={handleSearchToggle} type="button"
                        className="p-2 text-gray-600 transition-colors rounded-lg
                        hover:text-primary-600 hover:bg-gray-100" tabIndex={0}>
                            <Search className="w-5 h-5" />
                        </button>

                        <Link href={"/card"} className="relative p-2 text-gray-600 transition-colors rounded-lg
                        hover:text-primary-600 hover:bg-gray-100">
                            <ShoppingCart className="w-5 h-5"/>
                            {cartItemsCount > 0 && <span className="absolute flex items-center justify-center w-5 h-5
                            text-xs font-medium text-white rounded-full -top-1 -right-1 bg-primary-600">
                                {cartItemsCount}
                            </span>}
                        </Link>

                        <button 
                        onClick={handleMenuToggle} type="button"
                        className="sm:hidden p-2 text-gray-600 transition-colors
                        rounded-lg hover:text-primary-600 hover:bg-gray-100">
                            {isMenuOpen ? (
                                <X className="w5- h-5"/>
                            ) : (
                                <Menu className="w-5 h-5"/>
                            )}
                        </button>
                    </div>

                </div>

                    {isSearchOpen && (
                        
                            <div className="py-4 border-t border-gray-100">
                                <div className="relative">
                                    <Search className="w-5 h-5 absolute text-gray-300 
                                    transform -translate-y-1/2 left-3 top-1/2" />
                                    <input type="text" placeholder="Search products..."
                                     className="w-full py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400
                                     border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                                </div>
                            </div>
                    )}
                    

                    {isMenuOpen &&  (
                        <nav className="py-4 border-gray-600 transition-colors hover:text-primary-600"
                        role="navigation" aria-label="Mobile navigation">
                            <div className="flex gap-4">
                            <Link className="text-sm font-medium text-gray-700 transition-colors 
                            hover:text-primary-600">
                                Home
                            </Link>
                            <Link className="text-sm font-medium text-gray-700 transition-colors 
                            hover:text-primary-600">
                                Product
                            </Link>
                            </div>
                        </nav>
                    )} 
                </div>
        </header>
    );
};

export default Header