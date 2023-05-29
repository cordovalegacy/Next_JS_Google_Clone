// !this component is used in the search/layout.jsx file as {children}


import ImageSearchResults from "@/app/components/ImageSearchResults"
import Link from "next/link"

const ImageSearch = async ({ searchParams }) => { //* nextjs allows async components
    console.log("Search Parameters ---->", searchParams)

    const startIndex = searchParams.start || "1" 
    //? this grabs the start param value in the url or sets to 1 
    //todo plug query into fetch 
    const query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
    //todo plug options into fetch
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch(query, options)

    if (!res.ok) {
        throw new Error("Something went wrong")
    }

    const data = await res.json()
    console.log(data)

    if (!data.items) {
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
            {data.items && <ImageSearchResults data={data} />}
        </>
    )
}

export default ImageSearch