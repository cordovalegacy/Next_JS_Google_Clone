"use client"
import Image from "next/image"

const SearchBox = ({ googleSearch, setGoogleSearch, submitHandler, Search, searchParams, searchTerm }) => {

    return (
        <form onSubmit={submitHandler} className="relative mx-auto w-3/5">
            <Search
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={submitHandler}
            />
            <input
                type="text"
                className="w-full pl-5 pr-14 py-2 rounded-full border border-gray-200 hover:shadow-md shadow-gray-600 bg-white"
                placeholder="Search Google or type a URL"
                onChange={(e) => setGoogleSearch(e.target.value)}
                value={googleSearch}
            />
            {
                googleSearch.length > 0 ?
                    <span
                        className="hover:text-black active:text-red-600 cursor-pointer text-sm px-5 absolute top-1/2 right-12 text-slate-500 transform -translate-y-1/2"
                        onClick={() => setGoogleSearch("")}
                    >X</span> :
                    null
            }
            <div className="flex items-center absolute top-1/2 right-8 transform -translate-y-1/2">
                <span className="text-slate-200 text-xl">|</span>
                <Image
                    src="/google_voice.svg"
                    alt="voice search"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer hover:brightness-90"
                />
            </div>
        </form>
    )
}
export default SearchBox