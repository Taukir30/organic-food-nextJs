import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page({ params }) {

    const { id } = await params

    let data = await fetch(`https://organic-food-server-nine.vercel.app/products/${id}`)
    let productDetails = await data.json()
    console.log(productDetails)

    return (
        <div>
            <Navbar></Navbar>
            <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
                {/* Breadcrumb */}


                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Main */}
                    <div className="w-full lg:w-3/4">
                        <div className="flex flex-col gap-10 md:flex-row">
                            {/* Images */}
                            <div className="w-full md:w-1/2">
                                <div className="relative overflow-hidden rounded-[15px] border border-[#ececec] p-4">
                                    <span className="absolute left-0 top-0 z-10 rounded-br-[20px] rounded-tl-[15px] bg-[#f74b81] px-5 py-1 text-xs text-white">
                                        Sale
                                    </span>

                                    <Image
                                    src={productDetails.image}
                                    alt="Product"
                                    width={600}
                                    height={600}
                                    placeholder="blur"
                                    blurDataURL="/spinner.svg"
                                    className="w-full object-cover"
                                />
                                </div>

                                <div className="mt-4 flex gap-4">
                                    {[
                                        "thumbnail-3.jpg",
                                        "thumbnail-4.jpg",
                                        "thumbnail-5.jpg",
                                    ].map((img, i) => (
                                        <div
                                            key={i}
                                            className="cursor-pointer overflow-hidden rounded-[15px] border border-[#ececec] p-1 hover:border-[#3BB77E]"
                                        >
                                            {/* <Image
                                            src={`https://nest-frontend-v6.netlify.app/assets/imgs/shop/${img}`}
                                            alt="Thumbnail"
                                            width={80}
                                            height={80}
                                            className="rounded-[10px] object-cover"
                                        /> */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="w-full md:w-1/2">
                                <span className="rounded-[5px] bg-[#fde1e9] px-3 py-1 text-xs font-bold text-[#f74b81]">
                                    Sale Off
                                </span>

                                <h1 className="mb-4 mt-3 font-['Quicksand'] text-4xl font-bold text-[#253D4E]">
                                    {productDetails.name}
                                </h1>

                                <div className="mb-6 border-b border-[#ececec] pb-4 text-sm text-[#7E7E7E]">
                                    ⭐⭐⭐⭐⭐ (Ratings)
                                </div>

                                <div className="mb-6 flex items-end gap-3">
                                    <span className="text-5xl font-bold text-[#3BB77E]">Tk {productDetails.price}</span>
                                    <div>
                                        <span className="text-sm font-bold text-[#f74b81]">
                                            26% Off
                                        </span>
                                        <div className="text-2xl font-bold text-[#ADADAD] line-through">
                                            Tk {productDetails.price + 30}
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-8 text-[#7E7E7E]">
                                    {productDetails.description}
                                </p>

                                <button className="rounded-[5px] bg-[#3BB77E] px-8 py-3 font-bold text-white hover:bg-[#253D4E]">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
