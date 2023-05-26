"use client"

import Image from "next/image"
import Link from "next/link"
import SearchBox from "./SearchBox"
import { RiSettings3Line as Settings } from 'react-icons/ri'
import { TbGridDots as Grid } from 'react-icons/tb'
import { useState } from "react"
import { BsSearch as Search } from 'react-icons/bs'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import SearchNavOptions from "./SearchNavOptions"


const SearchNav = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("searchTerm")
    const [googleSearch, setGoogleSearch] = useState(searchTerm || "")

    const submitHandler = (e) => {
        e.preventDefault()
        if (!googleSearch.trim() /* trim eliminates trailing and leading whitespaces */) {
          return //block empty submission
        }
        router.push(`/search/web?searchTerm=${googleSearch}`) //adds the path to the domain of the site (google.com)
      }

    return (
        <nav className="sticky-top-0">
            <header className="flex items-center justify-between w-full p-6">
                <div className="flex w-5/6 items-center">
                    <Link href="/">
                        <Image
                            width={180}
                            height={40}
                            src={'/google_logo.svg'}
                            alt="google logo"
                        />
                    </Link>
                    <SearchBox 
                        googleSearch={googleSearch}
                        setGoogleSearch={setGoogleSearch}
                        submitHandler={submitHandler}
                        Search={Search}
                        searchParams={searchParams}
                        searchTerm={searchTerm}
                    />
                </div>
                <div className="flex items-center justify-evenly w-1/6">
                    <Settings className="header-icon hidden md:inline-flex" />
                    <Grid className="header-icon hidden md:inline-flex" />
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:brightness-110 hover:shadow-md transition duration-150">Sign In</button>
                </div>
            </header>
            <SearchNavOptions />
        </nav>
    )
}

export default SearchNav