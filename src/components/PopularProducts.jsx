import React from 'react'
import ProductCard from './ProductCard'

export default async function PopularProducts() {

    let data = await fetch('https://organic-food-server-nine.vercel.app/allproducts')
    let products = await data.json()
    console.log(products)

    return (
        <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h2 className="font-['Quicksand'] text-3xl font-bold text-[#253D4E]">
                    Popular Products
                </h2>

                {/* <nav className="flex flex-wrap gap-4 text-sm font-bold text-[#253D4E] lg:gap-6">
                    <a href="#" className="text-[#3BB77E]">All</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Milks & Dairies</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Coffees & Teas</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Pet Foods</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Meats</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Vegetables</a>
                    <a href="#" className="hover:text-[#3BB77E] transition-colors">Fruits</a>
                </nav> */}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                {/* Product Card */}

                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }

                {/* Repeat product cards here */}
            </div>
        </section>
    )
}
