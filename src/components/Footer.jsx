'use client';
import Image from 'next/image'
import React from 'react'
import payImg from '../assets/payments.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

export default function Footer() {
    return (
        <footer className="mx-auto px-2 md:px-30 pt-16 bg-[#D8F1E5]">
            {/* Top Section */}
            <div className="grid grid-cols-1 gap-8 border-b border-gray-100 pb-12 md:grid-cols-2 lg:grid-cols-6">

                {/* Brand */}
                <div className="lg:col-span-2">
                    <div className="mb-6 flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                            <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-['Quicksand'] text-2xl font-bold leading-none text-[#3BB77E]">
                                OrganicFood
                            </h2>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Mart & Grocery
                            </p>
                        </div>
                    </div>

                    <p className="font-['Lato'] mb-6 text-[15px] text-[#253D4E]">
                        Awesome grocery store website template
                    </p>

                    <div className="space-y-3 font-['Lato'] text-[14px] text-[#253D4E]">
                        <p><strong>Address:</strong> 5171 W Campbell Ave, Utah</p>
                        <p><strong>Call Us:</strong> (+91) - 540-025-124553</p>
                        <p><strong>Email:</strong> sale@Nest.com</p>
                        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    </div>
                </div>

                {/* Footer Columns */}
                {[
                    {
                        title: "Company",
                        links: [
                            "About Us",
                            
                            "Privacy Policy",
                            "Terms & Conditions",
                            "Contact Us",
                            "Support Center",
                            "Careers",
                        ],
                    },
                    {
                        title: "Account",
                        links: [
                            "Sign In",
                            "View Cart",
                            "My Wishlist",
                            "Track My Order",
                            
                            "Shipping Details",
                            "Compare products",
                        ],
                    },
                    {
                        title: "Popular",
                        links: [
                            "Milk & Butter",
                            
                            "Eggs Substitutes",
                            "Marmalades",
                            
                            "Tea & Kombucha",
                            "Cheese",
                        ],
                    },
                ].map((col, i) => (
                    <div key={i}>
                        <h4 className="font-['Quicksand'] mb-6 text-lg font-bold text-[#253D4E]">
                            {col.title}
                        </h4>
                        <ul className="font-['Lato'] space-y-3 text-[15px] text-[#253D4E]">
                            {col.links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="inline-block transition-all hover:translate-x-1 hover:text-[#3BB77E]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* App Install */}
                <div>
                    <h4 className="font-['Quicksand'] mb-6 text-lg font-bold text-[#253D4E]">
                        Install App
                    </h4>
                    <p className="mb-4 text-sm">From App Store or Google Play</p>

                    <div className="mb-8 space-y-2">
                        <Image
                            src={playstore}
                            alt="App Store"
                            width={140}
                            height={40}
                        />
                        <Image
                            src={appstore}
                            alt="Google Play"
                            width={140}
                            height={40}
                        />
                    </div>

                    {/* <p className="mb-4 text-sm">Secured Payment Gateways</p>
                    <Image
                        src={payImg}
                        alt="Payment Methods"
                        width={180}
                        height={24}
                    /> */}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center justify-center gap-6 py-2 lg:flex-row border-t border-gray-400">
                <p className="text-sm text-gray-500">
                    © 2024 <span className="text-[#3BB77E]">OrganicFood</span>. All rights reserved.
                </p>

                {/* <div className="flex items-center gap-3">
                    <span className="font-bold text-[#253D4E]">Follow Us</span>
                    <div className="flex gap-2">
                        {["facebook", "twitter", "instagram"].map((_, i) => (
                            <span
                                key={i}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3BB77E] text-white"
                            >
                                ●
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>
        </footer>
    )
}
