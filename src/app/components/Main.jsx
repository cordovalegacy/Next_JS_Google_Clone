// !this component is used in the root page.jsx file
"use client"

import Image from "next/image" //Image function, takes in parameters ("attributes")

//Main component holds home functionality (search, random button, loading effect)
const Main = ({ Search, submitHandler, googleSearch, setGoogleSearch, isLoading, randomSearch }) => {
    return (
        <main className="w-full p-5 my-12 space-y-8">
            <Image
                width={300}
                height={300}
                src='/google_logo.svg'
                alt="google logo"
                className="mx-auto"
            />
            <form onSubmit={submitHandler} className="relative mx-auto sm:w-full lg:w-2/5">
                <Search
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={submitHandler}
                />
                <input
                    type="text"
                    className="w-full outline-none pl-10 pr-14 py-2 rounded-full border shadow-gray-300 shadow-sm border-gray-200 hover:shadow-md hover:shadow-gray-600 bg-white"
                    placeholder="Search Google or type a URL"
                    onChange={(e) => setGoogleSearch(e.target.value)}
                    value={googleSearch}
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <Image
                        src="/google_voice.svg"
                        alt="voice search"
                        width={20}
                        height={20}
                        className="hover:cursor-pointer hover:brightness-90"
                    />
                </div>
            </form>
            <div className="flex items-center justify-evenly mx-auto w-2/5 px-5">
                <button
                    className="btn"
                    onClick={submitHandler}
                >Google Search!</button>
                <button
                    className={'btn disabled:cursor-not-allowed disabled:bg-white disabled:hover:shadow-none'}
                    disabled={isLoading}
                    onClick={randomSearch}
                >{!isLoading ? "Feelin' Lucky?" :
                    <Image
                        width={60}
                        height={60}
                        src="/google_loading.svg" alt="loading"
                    />}
                </button>
            </div>
        </main>
    )
}

export default Main