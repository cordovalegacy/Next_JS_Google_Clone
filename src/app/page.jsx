// !this component is {children} in the root layout.jsx file
"use client"

import Nav from "./components/Nav" //home nav component
import Main from "./components/Main" //home body component
import { BsSearch as Search } from 'react-icons/bs' //search icon
import { useState } from "react"
import { useRouter } from "next/navigation" //like navigate from react router
var randomWords = require('random-words') //random word function (dependency)
import { SessionProvider } from 'next-auth/react';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}


export default function Home({ session }) { //active:ring a is cool effect on buttons

  const [googleSearch, setGoogleSearch] = useState("") //handles state for home search bar
  const [isLoading, setIsLoading] = useState(false) //handles loading icon state
  const router = useRouter() //navigate

  const submitHandler = (e) => { //handles search bar submission
    e.preventDefault()
    if (!googleSearch.trim() /* trim eliminates trailing and leading whitespaces */) {
      return //block empty submission
    }
    router.push(`/search/web?searchTerm=${googleSearch}`) //adds the path to the domain of the site (google.com)
  }

  const randomSearch = async () => { //grabs a random word from random-words package
    setIsLoading(true) //if loading, show loading icon
    const response = await randomWords() //gets random words
    if (!response) return
    router.push(`/search/web?searchTerm=${response}`) //push random word into searchTerm (params)
    setIsLoading(false) //if not loading, show feelin lucky button (random button)
  }

  return (
    <SessionProvider session={session}>
      <Nav />
      <Main
        Search={Search}
        submitHandler={submitHandler}
        googleSearch={googleSearch}
        setGoogleSearch={setGoogleSearch}
        isLoading={isLoading}
        randomSearch={randomSearch}
      />
    </SessionProvider>
  )
}
