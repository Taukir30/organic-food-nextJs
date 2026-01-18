import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {

    console.log(product)

    return (
        <div className="group shadow-sm relative flex flex-col rounded-[15px] border border-gray-100 bg-white p-5 transition-all hover:border-[#3BB77E] hover:shadow-lg">
            <span className="absolute left-0 top-0 z-10 rounded-br-[20px] rounded-tl-[15px] bg-[#FD6282] px-5 py-1 text-xs text-white">
                {product.rating}
            </span>

            <div className="mb-4 flex h-48 items-center justify-center overflow-hidden">
                <Image
                    src={product.image}
                    alt="Product"
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex grow flex-col">
                <p className="font-['Lato'] mb-1 text-xs text-gray-400">{product.category}</p>
                <h3 className="font-['Quicksand'] mb-2 text-[15px] font-bold text-[#253D4E] hover:text-[#3BB77E] transition-colors">
                    {product.name}
                </h3>

                <p className="font-['Lato'] mb-4 text-xs text-gray-400">
                    By <span className="text-[#3BB77E]">OrganicFood</span>
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-['Quicksand'] text-lg font-bold text-[#3BB77E]">
                            $ {product.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through">${product.price + 30}</span>
                    </div>

                    <Link href={`/product-detail/${product._id}`} className="flex items-center gap-2 rounded-sm bg-[#DEF9EC] px-4 py-2 text-xs font-bold text-[#3BB77E] hover:bg-[#3BB77E] hover:text-white transition-all">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
