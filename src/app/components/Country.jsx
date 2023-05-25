"use client"
import { useEffect, useState } from "react"

//needs this line because we want to get user location not server location

const Country = () => {

    const [country, setCountry] = useState("...searching for location")

    useEffect(() => {
        const fetchCountry = async () => {
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