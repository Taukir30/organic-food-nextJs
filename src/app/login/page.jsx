import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import loginImg from '../../assets/groceryLogin.jpg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'

export default function page() {
    return (
        <div>
            <Navbar></Navbar>
            <section className="mx-auto ">
                <div className="flex flex-col lg:flex-row items-center  gap-12">
                    {/* Illustration */}
                    <div className="hidden lg:block lg:w-1/2">
                        <Image
                            src={loginImg}
                            alt="Login Illustration"
                            width={600}
                            height={600}
                            className=" max-w-full"
                        />
                    </div>

                    {/* Login Form */}
                    <div className="w-full max-w-125 lg:w-1/2">
                        <div className="rounded-[15px] border border-[#ececec] bg-white p-10 shadow-sm">
                            <div className="mb-8">
                                <h1 className="font-['Quicksand'] mb-5 text-4xl font-bold text-[#253D4E]">Login</h1>
                                <LoginForm></LoginForm>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
