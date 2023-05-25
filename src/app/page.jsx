"use client"

import Image from "next/image";
import Nav from "./components/Nav";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import { useRouter } from "next/navigation";
var randomWords = require('random-words');

export default function Home() { //active:ring a is cool effect on buttons

  const [googleSearch, setGoogleSearch] = useState("")
  const router = useRouter()

const submitHandler = (e, response) => {
    e.preventDefault()
    if (!googleSearch.trim() /* trim eliminates trailing and leading whitespaces */) {
      return //block empty submission
    }
    if (response) {
      router.push(`/search/web?searchTerm=${response}`)
    }
    else {
      router.push(`/search/web?searchTerm=${googleSearch}`) //adds the path to the domain of the site (google.com)
    }
  }

  const randomSearch = async (e) => {
    e.preventDefault()
    const response = await randomWords()
    console.log(response)
    setGoogleSearch(response)
    submitHandler(e, response)
  }

  return (
    <>
      {/* header */}
      <Nav />
      {/* body */}
      <main className="w-full p-5 my-20 space-y-8">
        <Image
          width={300}
          height={300}
          src='/google_logo.svg'
          alt="google logo"
          className="mx-auto"
        />
        <form onSubmit={(e) => submitHandler(e)} className="relative mx-auto w-2/5">
          <BsSearch
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={submitHandler}
          />
          <input
            type="text"
            className="w-full pl-10 pr-14 py-2 rounded-full border border-gray-200 hover:shadow-md shadow-gray-600 bg-white"
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
            className="btn"
            onClick={(e) => randomSearch(e)}
          >Feelin' Lucky?</button>
        </div>
      </main>
    </>
  );
}
