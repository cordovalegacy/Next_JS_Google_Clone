// !this component is used in the search/layout.jsx file as {children}

import Link from "next/link"

const WebSearch = async ({ searchParams }) => { //search params grab current url data

    const query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }
    const res = await fetch(query, options)

    if (!res.ok) {
        throw new Error("Something went wrong")
    }

    const data = await res.json()
    // console.log("Data----->",data)
    const results = data.items //data.items is an array

    if (!results) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl p-4 m-4">No Results Found</h1>
                <Link
                    className="text-blue-500 p-5 mx-2"
                    href={'/'}
                >Go Back Home</Link>
            </div>
        )
    }

    return (
        <>
            {results && results.map((res) => (
                <h2>{res.title}</h2>
            ))}
        </>
    )
}

export default WebSearch