import Image from 'next/image'
import React from 'react'
import honeyImg from '../assets/honey.png'
import oilImg from '../assets/oil.png'
import nutsImg from '../assets/nuts.png'
import butterImg from '../assets/butter.png'
import dateImg from '../assets/dates.png'
import spiceImg from '../assets/spice.png'
import teaImg from '../assets/tea.png'
import chocolateImg from '../assets/chocolates.png'
import cakeImg from '../assets/cake.png'
import fruitImg from '../assets/fruits.png'

export default function Category() {
    
    return (
        <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center justify-between">
                <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-8">
                    <h2 className="font-['Quicksand'] text-3xl font-bold text-[#253D4E]">Featured Categories</h2>

                </div>

                <div className="flex gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm transition-all hover:bg-[#3BB77E] hover:text-white">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm transition-all hover:bg-[#3BB77E] hover:text-white">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-9">

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#D2F1E1] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={honeyImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Honey</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">26 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#FEEFEA] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={oilImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Oils</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">28 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#D2F1E1] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={nutsImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Nuts</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">14 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#FEEFEA] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={butterImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Butter</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">54 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#FEEFEA] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={dateImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Dates</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">56 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#F2E8F9] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={spiceImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Spices</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">72 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#D2F1E1] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={teaImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Drinks</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">36 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#FEEFEA] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={chocolateImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Chocolates</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">123 items</p>
                </div>

                <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#E5F3FF] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={cakeImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Cakes</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">34 items</p>
                </div>

                {/* <div className="group flex cursor-pointer flex-col items-center rounded-[15px] border border-transparent bg-[#FEEFEA] p-4 text-center transition-all duration-300 hover:border-[#3BB77E] hover:shadow-lg">
                    <div className="mb-4 h-20 transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src={fruitImg}
                            alt='image'
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-['Quicksand'] mb-1 text-[15px] font-bold text-[#253D4E] group-hover:text-[#3BB77E]">Fruits</h3>
                    <p className="font-['Lato'] text-xs font-semibold text-gray-500">89 items</p>
                </div> */}

            </div>
        </section>
    )
}
