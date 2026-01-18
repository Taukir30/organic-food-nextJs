import Image from 'next/image'
import React from 'react'
import banImg from '../assets/unnamed.png'

export default function Banner() {
    return (
        <section className="relative rounded-lg overflow-hidden bg-[#D2F1E1] mb-12 min-h-125 flex items-center">
            <div className="absolute inset-0 z-0">
                <Image alt="Fresh Vegetables background" className="w-full h-full object-cover opacity-60"
                    src={banImg}
                    fill
                    priority
                />
            </div>
            <div className="relative z-10 p-2 md:p-15 max-w-3xl">
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-[#253D4E] mb-6 leading-tight">
                    Fresh Vegetables <br /> <span className="text-gray-600">Big discount</span>
                </h1>
                <p className="text-xl text-gray-500 mb-10">Save up to 50% off on your first order</p>
                <div className="flex bg-white rounded-full p-2 max-w-md shadow-sm">
                    
                    <input className=" pl-3 grow border-none focus:ring-0 text-gray-600" placeholder="Your email address"
                        type="email" />
                    <button
                        className="bg-[#4EBE8B] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">Subscribe</button>
                </div>
            </div>
        </section>
    )
}
