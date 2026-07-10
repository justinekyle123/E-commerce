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

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100"> 
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href={"/"} className="text-2xl font-bold text-primary-500">
                            KyleStore
                        </Link>
                        <nav className="hidden md:flex md:items-center md:gap-6" role="navigation">
                            <Link className="text-sm font-medium text-gray-700 transition-colors 
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
                        <button type="button"
                        onClick={() => {}}
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
                        onClick={() => {}}
                        className="md:hidden p-2 text-gray-600 transition-colors
                        rounded-lg hover:text-primary-600 hover:bg-gray-100">
                            {isMenuOpen ? (
                                <X className="w5- h-5"/>
                            ) : (
                                <Menu className="w-5 h-5"/>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header