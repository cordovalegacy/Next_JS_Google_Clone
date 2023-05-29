"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'
import Link from "next/link"
import { useState } from "react"

const PaganationButtons = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("searchTerm")
    const startIndex = +searchParams.get("start") || 1
    const [isPrevHovered, setIsPrevHovered] = useState(false)
    const [isNextHovered, setIsNextHovered] = useState(false)

    const handlePrevHover = () => {
        setIsPrevHovered(true)
    }

    const handlePrevLeave = () => {
        setIsPrevHovered(false)
    }

    const handleNextHover = () => {
        setIsNextHovered(true)
    }

    const handleNextLeave = () => {
        setIsNextHovered(false)
    }

    return (
        <div className="flex items-center justify-between w-3/4 my-10 text-lg sm:text-md cursor-pointer">
            {startIndex >= 10 && (
                <div
                    className={`flex items-center gap-1 hover:text-blue-900 text-gray-800 transition-transform duration-300 ${isPrevHovered ? "hover:translate-x-[-10px]" : ""
                        }`}
                    onMouseEnter={handlePrevHover}
                    onMouseLeave={handlePrevLeave}
                >
                    <Link
                        href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
                        className="flex items-center"
                    >
                        <GrLinkPrevious />
                        <p className="hover:text-blue-900">| Prev</p>
                    </Link>
                </div>
            )}
            <div
                className={`flex items-center gap-1 hover:text-blue-900 text-gray-800 transition-transform duration-300 ${isNextHovered ? "hover:translate-x-[10px]" : ""
                    }`}
                onMouseEnter={handleNextHover}
                onMouseLeave={handleNextLeave}
            >
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
                    className="flex items-center"
                >
                <p className="hover:text-blue-900">Next |</p>
                    <GrLinkNext />
                </Link>
            </div>
        </div>
    )
}

export default PaganationButtons



