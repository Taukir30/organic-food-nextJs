'use client';
// import { useRouter } from 'next/router';
import React from 'react'

export default function LogoutButton({setIsLoggedIn}) {

    // const router = useRouter();

    const handleLogout = () => {
        // Remove the auth cookie by setting it to expire in the past
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        // Redirect the user to the login page
        // router.push("/login");
        setIsLoggedIn(false)
    }

    return (
        <button
            onClick={handleLogout}
            className="rounded-[10px] bg-[#4EBE8B] px-6 py-3 font-bold text-white transition-all hover:bg-[#e03e6e]"
        >
            Logout
        </button>
    )
}
