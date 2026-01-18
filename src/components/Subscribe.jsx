import React from 'react'
import subImg from '../assets/subImg.png'
import Image from 'next/image'

export default function Subscribe() {
    return (
        <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
            <div className="relative min-h-112.5 overflow-hidden rounded-[30px] bg-[#D8F1E5] px-8 py-16 md:px-16 md:py-24">

                <div className="relative z-10 max-w-150">
                    <h1
                        className="font-['Quicksand'] mb-6 text-4xl font-bold leading-tight text-[#253D4E] md:text-5xl lg:text-6xl">
                        Stay home & get your daily needs from our shop
                    </h1>

                    <p className="font-['Lato'] mb-12 text-lg text-[#7E7E7E]">
                        Start Your Daily Shopping with <span className="text-[#3BB77E]">Organic Food</span>
                    </p>

                    <form className="relative flex max-w-112.5 items-center rounded-full bg-white p-1 shadow-md">
                        <div className="pl-6 text-gray-400">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>

                        <input type="email" placeholder="Your emaill address"
                            className="font-['Lato'] w-full bg-transparent px-4 py-4 text-sm outline-none placeholder:text-gray-400" />

                        <button type="submit"
                            className="font-['Quicksand'] rounded-full bg-[#3BB77E] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#29A56C]">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="absolute bottom-0 right-0 h-full w-full pointer-events-none md:block hidden">
                    <div className="absolute bottom-0 right-0 h-[90%] w-[40%] ">
                        <Image
                            src={subImg}
                            alt="Delivery Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="h-full w-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="veg-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="2" fill="#3BB77E" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#veg-pattern)" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
