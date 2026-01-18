'use client';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export default function LoginForm() {

    const router = useRouter();
    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "admin@example.com" && password === "123456") {
            document.cookie = "auth=true; path=/";
            router.push("/all-products")
        }
        else {

        }
    }

    return (
        <div className="mx-auto max-w-125 rounded-[15px] ">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                    <label className="font-['Quicksand'] mb-2 block text-sm font-bold text-[#253D4E]">
                        Email address
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="font-['Lato'] w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm text-[#253D4E] outline-none transition-all focus:border-[#3BB77E] focus:ring-1 focus:ring-[#3BB77E]"
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="font-['Quicksand'] mb-2 block text-sm font-bold text-[#253D4E]">
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="font-['Lato'] w-full rounded-[10px] border border-[#ececec] px-4 py-3 text-sm text-[#253D4E] outline-none transition-all focus:border-[#3BB77E] focus:ring-1 focus:ring-[#3BB77E]"
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="font-['Quicksand'] w-full rounded-[10px] bg-[#253D4E] py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-[#3BB77E]"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}
