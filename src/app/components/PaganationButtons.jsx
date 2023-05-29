"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'
import Link from "next/link"
import { useState } from "react"

const PaganationButtons = () => {

    //! URL variables
    const pathname = usePathname() //grabs current path (excluding params)
    const searchParams = useSearchParams() //grabs current params (excluding path)
    const searchTerm = searchParams.get("searchTerm") //setting equivalent to param value (searchTerm=${googleSearch})
    const startIndex = +searchParams.get("start") || 1 //setting equivalent to param value (see above) or 1
    //The + before searchParams.get("start") above is called a unary plus operator, 
    //which attempts to convert the retrieved string value to a number. 
    //This is done by applying the JavaScript Number()
    //! URL variables

    //! Animation variables
    const [isPrevHovered, setIsPrevHovered] = useState(false)
    const [isNextHovered, setIsNextHovered] = useState(false)
    //! Animation variables

    //! Animation functions
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
    //! Animation function

    return (
        <div className="flex items-center justify-between w-3/4 my-10 text-lg sm:text-md">
            //!calls on the url that grabs the previous 10 results from the start params
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
                        <p className="hover:text-blue-900 cursor-pointer">| Prev</p>
                    </Link>
                </div>
            )}
            {startIndex <= 90 && (
                <div
                    className={`flex items-center gap-1 hover:text-blue-900 text-gray-800 transition-transform duration-300 ${isNextHovered ? "hover:translate-x-[10px]" : ""
                        }`}
                    onMouseEnter={handleNextHover}
                    onMouseLeave={handleNextLeave}
                >
                    <Link
                        //!calls on the url that grabs the next 10 results from the start params
                        href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`} 
                        className="flex items-center"
                    >
                        <p className="hover:text-blue-900 cursor-pointer">Next |</p>
                        <GrLinkNext />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default PaganationButtons



