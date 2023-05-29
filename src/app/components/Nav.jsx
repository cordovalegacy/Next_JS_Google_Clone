// !this component is used in the root page.jsx file
"use client"
import Link from "next/link" //nextjs anchor tag for SPA
import { TbGridDots } from 'react-icons/tb' //grid icon
import { useSession, signIn, signOut } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession();

    const logStatus = () => {
        if (session) {
            signOut('google');
        } else {
            signIn('google');
        }
    };

    return (
        <nav className="p-5">
            <header className="flex items-center justify-end gap-5">
                <Link className="hover:underline" href={'https://mail.google.com/mail'}>
                    Gmail
                </Link>
                <Link className="hover:underline" href={'https://www.google.com/imghp?hl=en&tab=ri&ogbl'}>
                    Images
                </Link>
                <TbGridDots className="bg-transparent cursor-pointer hover:bg-gray-300 rounded-full p-1 text-3xl" />
                {session ? (
                    <button
                        className="bg-blue-500 text-white px-6 py-1 rounded-md hover:brightness-110 hover:shadow-md transition duration-150"
                        onClick={logStatus}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 text-white px-6 py-1 rounded-md hover:brightness-110 hover:shadow-md transition duration-150"
                        onClick={logStatus}
                    >
                        Sign In
                    </button>
                )}
            </header>
        </nav>
    );
};

export default Nav;
