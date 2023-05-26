// !this component is used in the Footer.jsx file
"use client" //needs this line because we want to get user location not server location
import { useEffect, useState } from "react"

const Country = () => { //this component uses geographic api to get user ip

    const [country, setCountry] = useState("...searching for location") //state to store user ip data

    useEffect(() => { //onload
        const fetchCountry = async () => { //this function grabs country from ipapi
            try {
                const response = await fetch("https://ipapi.co/json/")
                const data = await response.json()
                setCountry({
                    city: data.city,
                    region: data.region,
                    country: data.country
                })
            } catch (error) {
                console.error("Error fetching country:", error)
            }
        }

        fetchCountry()
    }, [])

    return (
        <h3 className="tracking-wider">
            {
                country === "...searching for location" ?
                    `...searching for location` :
                    `${country?.city}, ${country?.region} - ${country?.country}`
            }
        </h3>
    )
}

export default Country