import Link from "next/link"
import { TbGridDots } from 'react-icons/tb'

const Nav = () => {
    return (
        <nav className="p-5">
            <header className="flex items-center justify-end gap-5">
                <Link className="hover:underline" href={'https://mail.google.com/mail'}>Gmail</Link>
                <Link className="hover:underline" href={'https://www.google.com/imghp?hl=en&tab=ri&ogbl'}>Images</Link>
                <TbGridDots className="bg-transparent cursor-pointer hover:bg-gray-300 rounded-full p-1 text-3xl" />
                <button className="bg-blue-500 text-white px-6 py-1 rounded-md hover:brightness-110 hover:shadow-md transition duration-150">Sign In</button>
            </header>
        </nav>
    )
}

export default Nav