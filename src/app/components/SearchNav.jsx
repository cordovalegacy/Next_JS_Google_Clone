// !this component is used in the search/layout.jsx file
"use client"

import Image from "next/image" //nextjs Image function
import Link from "next/link" //nextjs anchor tag for SPA
import SearchBox from "./SearchBox" //non-home-page search bar w/functionality
import SearchNavOptions from "./SearchNavOptions" //search bar sub nav, configures search type (web or images) 
import { RiSettings3Line as Settings } from 'react-icons/ri' //settings icon
import { TbGridDots as Grid } from 'react-icons/tb'//grid icon
import { useState } from "react" //used to track google search
import { BsSearch as Search } from 'react-icons/bs' //search icon
import { useSearchParams } from "next/navigation" //configured to grab path params (?searchTerm=param)
import { useRouter } from "next/navigation" //used to push new routes (like navigate from react-router)
import { usePathname } from "next/navigation" //gets current path name (not including params)

//SearchNav is the active search page alternative to the home search page (user goes here when home search happens)
const SearchNav = () => {

    const router = useRouter() //like navigate
    const pathname = usePathname() //current path
    const searchParams = useSearchParams() //current params
    const searchTerm = searchParams.get("searchTerm") //searchTerm default and function
    const [googleSearch, setGoogleSearch] = useState(searchTerm || "") //initial value of searchTerm

    const selectTab = (tabIdx) => { //two tabs to choose from: images or web
        router.push(`/search/${tabIdx === "Images" ? "image": "web"}?searchTerm=${searchTerm}`)
    } 

    const submitHandler = (e) => { //handles search submission if valid
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
            <SearchNavOptions Search={Search} pathname={pathname} selectTab={selectTab} />
        </nav>
    )
}

export default SearchNav