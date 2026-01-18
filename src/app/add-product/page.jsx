'use client';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar></Navbar>

            <section className="mx-auto max-w-400 px-2 md:px-15 py-10 bg-[#f8f9fa]">
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="font-['Quicksand'] text-3xl font-bold text-[#253D4E]">
                            Add New Product
                        </h1>
                        
                    </div>

                    <div className="flex gap-4">
                        <button className="font-['Quicksand'] rounded-[10px] border border-[#ececec] px-6 py-2.5 font-bold text-[#7E7E7E] transition-all hover:bg-white hover:text-[#253D4E]">
                            Save as Draft
                        </button>
                        <button className="font-['Quicksand'] rounded-[10px] bg-[#3BB77E] px-8 py-2.5 font-bold text-white shadow-md transition-all hover:bg-[#253D4E]">
                            Publish Product
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* LEFT */}
                    <div className="w-full space-y-8 lg:w-2/3">
                        {/* General Info */}
                        <div className="rounded-[15px] border border-[#ececec] bg-white p-8 shadow-sm">
                            <h4 className="mb-6 font-['Quicksand'] text-xl font-bold text-[#253D4E]">
                                General Information
                            </h4>

                            <div className="space-y-6">
                                <div>
                                    <label className="mb-2 block font-['Quicksand'] text-sm font-bold text-[#253D4E]">
                                        Product Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Type here..."
                                        className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm text-[#253D4E] outline-none transition-all focus:border-[#3BB77E] focus:ring-1 focus:ring-[#3BB77E]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block font-['Quicksand'] text-sm font-bold text-[#253D4E]">
                                        Description
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Type here..."
                                        className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm text-[#253D4E] outline-none transition-all focus:border-[#3BB77E] focus:ring-1 focus:ring-[#3BB77E]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Media */}
                        <div className="rounded-[15px] border border-[#ececec] bg-white p-8 shadow-sm">
                            <h4 className="mb-6 font-['Quicksand'] text-xl font-bold text-[#253D4E]">
                                Media
                            </h4>

                            <div className="flex flex-col items-center justify-center rounded-[15px] border-2 border-dashed border-[#ececec] py-12 text-center transition-all hover:border-[#3BB77E]">
                                <div className="mb-4 rounded-full bg-[#D2F1E1] p-4 text-[#3BB77E]">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>
                                </div>

                                <p className="font-['Lato'] text-[#253D4E]">
                                    Drop your images here or{' '}
                                    <span className="cursor-pointer font-bold text-[#3BB77E]">
                                        browse
                                    </span>
                                </p>
                                <p className="mt-2 text-xs text-gray-400">
                                    Supported formats: JPG, PNG, WEBP (Max: 5MB)
                                </p>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="rounded-[15px] border border-[#ececec] bg-white p-8 shadow-sm">
                            <h4 className="mb-6 font-['Quicksand'] text-xl font-bold text-[#253D4E]">
                                Pricing & Stock
                            </h4>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {[
                                    ['Regular Price ($)', 'number'],
                                    ['Sale Price ($)', 'number'],
                                    ['SKU', 'text'],
                                    ['Stock Quantity', 'number'],
                                ].map(([label, type]) => (
                                    <div key={label}>
                                        <label className="mb-2 block font-['Quicksand'] text-sm font-bold text-[#253D4E]">
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            placeholder="0"
                                            className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm text-[#253D4E] outline-none transition-all focus:border-[#3BB77E] focus:ring-1 focus:ring-[#3BB77E]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <aside className="w-full space-y-8 lg:w-1/3">
                        <div className="rounded-[15px] border border-[#ececec] bg-white p-8 shadow-sm">
                            <h4 className="mb-6 border-b border-[#ececec] pb-3 font-['Quicksand'] text-lg font-bold text-[#253D4E]">
                                Organization
                            </h4>

                            <div className="space-y-6">
                                <select className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm">
                                    <option>Milks & Dairies</option>
                                    <option>Vegetables</option>
                                    <option>Pet Foods</option>
                                    <option>Snack</option>
                                </select>

                                <select className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm">
                                    <option>NestFood</option>
                                    <option>Stauffer</option>
                                    <option>StarKist</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="Organic, Fresh, etc."
                                    className="w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm"
                                />
                            </div>
                        </div>

                        <div className="rounded-[15px] border border-[#ececec] bg-white p-8 shadow-sm">
                            <h4 className="mb-6 border-b border-[#ececec] pb-3 font-['Quicksand'] text-lg font-bold text-[#253D4E]">
                                Product Status
                            </h4>

                            <div className="flex justify-between text-sm">
                                <span className="text-[#7E7E7E]">Visibility</span>
                                <span className="font-bold text-[#3BB77E]">Public</span>
                            </div>

                            <div className="mt-4 flex justify-between text-sm">
                                <span className="text-[#7E7E7E]">Publishing on</span>
                                <span className="font-bold text-[#253D4E]">Immediate</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}
