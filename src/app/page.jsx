"use client"

import Nav from "./components/Nav"
import Main from "./components/Main"
import { BsSearch as Search } from 'react-icons/bs'
import { useState } from "react"
import { useRouter } from "next/navigation"
var randomWords = require('random-words')

export default function Home() { //active:ring a is cool effect on buttons

  const [googleSearch, setGoogleSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!googleSearch.trim() /* trim eliminates trailing and leading whitespaces */) {
      return //block empty submission
    }
    router.push(`/search/web?searchTerm=${googleSearch}`) //adds the path to the domain of the site (google.com)
  }

  const randomSearch = async () => { //grabs a random word from random-words package
    setIsLoading(true)
    const response = await randomWords()
    if (!response) return
    router.push(`/search/web?searchTerm=${response}`)
    setIsLoading(false)
  }

  return (
    <>
      {/* header */}
      <Nav />
      {/* body */}
      <Main
        Search={Search}
        submitHandler={submitHandler}
        googleSearch={googleSearch}
        setGoogleSearch={setGoogleSearch}
        isLoading={isLoading}
        randomSearch={randomSearch}
      />
    </>
  )
}
