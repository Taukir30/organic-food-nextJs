import React from 'react'


const features = [
    {
        title: "Best prices & offers",
        subtitle: "Orders $50 or more",
        path: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
    },
    {
        title: "Free delivery",
        subtitle: "24/7 amazing services",
        path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
        title: "Great daily deal",
        subtitle: "When you sign up",
        path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
        title: "Wide assortment",
        subtitle: "Mega Discounts",
        path: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    },
    {
        title: "Easy returns",
        subtitle: "Within 30 days",
        path: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z",
    },
];

export default function Stickers() {
    return (
        <section className="mx-auto max-w-400 px-2 md:px-15 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 rounded-[15px] bg-[#F4F6FA] p-6 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="shrink-0 text-[#3BB77E]">
                            <svg
                                className="h-10 w-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d={item.path}
                                />
                            </svg>
                        </div>

                        <div>
                            <h4 className="font-['Quicksand'] text-lg font-bold text-[#253D4E]">
                                {item.title}
                            </h4>
                            <p className="font-['Lato'] text-sm text-[#ADADAD]">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
