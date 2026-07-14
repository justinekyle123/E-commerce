import { Link } from "@inertiajs/react";


const Footer = () => {
    return(
        <footer className="bg-gray-900">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link 
                        href={"/"}
                        className="text-2xl font-bold text-white">
                            KyleStore
                        </Link>
                        <p className="mx-2-md mt-4 text-sm text-gray-400">
                            A modern e-commerce demo built with Laravel and React. Integrated with 
                            HitPay for seamless payment processing.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-white font-semibold tracking-wider uppercase">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                href={"/"}
                                className="text-gray-400 transition-colors text-sm 
                                hover:text-white"> 
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                href={"/"}
                                className="text-gray-400 transition-colors text-sm 
                                hover:text-white"> 
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                href={"/"}
                                className="text-gray-400 transition-colors text-sm 
                                hover:text-white"> 
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;