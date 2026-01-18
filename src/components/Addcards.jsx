import React from 'react'
import onion from '../assets/cardOnion.png'
import drink from '../assets/cardDrink.png'
import veg from '../assets/cardVeg.png'
import Image from 'next/image'

export default function addCards() {
    return (
        <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div
                    className="relative overflow-hidden rounded-[15px] bg-[#F0E8D5] p-10 min-h-75 flex items-center group">
                    <div className="relative z-10 max-w-[60%]">
                        <h3 className="font-['Quicksand'] text-[#253D4E] text-2xl font-bold mb-6 leading-tight">
                            Everyday Fresh & Clean with Our Products
                        </h3>
                        <a href="#"
                            className="inline-flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded-[5px] text-xs font-bold transition-all hover:bg-[#29A56C]">
                            Shop Now
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                    <Image
                        src={onion}
                        alt="Onions"
                        width={150}
                        className="absolute bottom-0 right-0 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div
                    className="relative overflow-hidden rounded-[15px] bg-[#F3E8E8] p-10 min-h-75 flex items-center group">
                    <div className="relative z-10 max-w-[60%]">
                        <h3 className="font-['Quicksand'] text-[#253D4E] text-2xl font-bold mb-6 leading-tight">
                            Make your Breakfast Healthy and Easy
                        </h3>
                        <a href="#"
                            className="inline-flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded-[5px] text-xs font-bold transition-all hover:bg-[#29A56C]">
                            Shop Now
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                    <Image
                        src={drink}
                        alt="Onions"
                        width={200}
                        className="absolute bottom-0 right-0 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div
                    className="relative overflow-hidden rounded-[15px] bg-[#E7EAF3] p-10 min-h-75 flex items-center group">
                    <div className="relative z-10 max-w-[60%]">
                        <h3 className="font-['Quicksand'] text-[#253D4E] text-2xl font-bold mb-6 leading-tight">
                            The best Organic Products Online
                        </h3>
                        <a href="#"
                            className="inline-flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded-[5px] text-xs font-bold transition-all hover:bg-[#29A56C]">
                            Shop Now
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                    <Image
                        src={veg}
                        alt="Onions"
                        width={200}
                        className="absolute bottom-0 right-0 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

            </div>
        </section>
    )
}
