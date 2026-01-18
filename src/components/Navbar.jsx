'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LogoutButton from './LogoutButton';

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // This runs only in the browser
        const loggedIn = document.cookie
            .split('; ')
            .some(row => row.startsWith('auth='));
        setIsLoggedIn(loggedIn);
    }, []);

    const items = <>
        <li>
            <Link className="hover:text-[#3BB77E] transition-colors flex items-center gap-1" href="/">Home  </Link>
        </li>
        <li>
            <Link className="hover:text-[#3BB77E] transition-colors flex items-center gap-1" href="/all-products">All Products  </Link>
        </li>
        <li>
            <Link className="hover:text-[#3BB77E] transition-colors flex items-center gap-1" href="/">Categories  </Link>
        </li>
        <li>
            <Link className="hover:text-[#3BB77E] transition-colors flex items-center gap-1" href="/add-product">Add Product  </Link>
        </li>
    </>

    return (
        <header className="py-3 px-2 md:px-15 border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">

            <div className="navbar gap-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <div>
                        <h1 className="hidden md:block text-2xl font-display font-bold text-[#3BB77E] leading-tight">OrganicFood</h1>
                        <h1 className="block md:hidden text-2xl font-display font-bold text-[#3BB77E] leading-tight">OF</h1>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="hidden lg:flex ml-8 space-x-8 font-display font-bold text-sm">
                        {items}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <div className="hidden md:flex items-center border border-gray-200 rounded px-2 py-1 text-xs gap-1">
                        <div>
                            <p className="text-[#3BB77E] font-bold text-lg leading-none">1900 - 888</p>
                            <p className="text-[10px] text-gray-400">24/7 Support Center</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-gray-600">

                        {/* <div className="relative  hidden md:flex items-center gap-1 cursor-pointer hover:text-nest-green transition">
                            <div className="relative">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                <span className="absolute -top-2 -right-2 bg-nest-green text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">6</span>
                            </div>
                            <span className="text-sm font-medium pt-1">Wishlist</span>
                        </div> */}
                        <div className="relative hidden md:flex items-center gap-1 cursor-pointer hover:text-nest-green transition">
                            <div className="relative">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span className="absolute -top-2 -right-2 bg-nest-green text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                            </div>
                            <span className="text-sm font-medium pt-1">Cart</span>
                        </div>


                        {isLoggedIn ? (
                            <LogoutButton setIsLoggedIn={setIsLoggedIn}></LogoutButton>
                        ) : (
                            <Link href="/login" className="flex items-center gap-1 cursor-pointer hover:text-nest-green transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <span className="text-sm font-medium pt-1">Login</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </header>
    )
}
