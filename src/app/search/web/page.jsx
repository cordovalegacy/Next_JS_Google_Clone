// !this component is used in the search/layout.jsx file as {children}

import WebSearchResults from "@/app/components/WebSearchResults"
import Link from "next/link"

const WebSearch = async ({ searchParams }) => { //search params grab current url data
    console.log("Search Parameters ---->",searchParams)

    const startIndex = searchParams.start || "1"
    const query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
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
            {data.items && <WebSearchResults data={data} />}
        </>
    )
}

export default WebSearch

// ! The gist of why searchParams works without directly prop passing... (because of NEXTJS13 routing)
//The searchParams object is indirectly provided to the WebSearch component through the usage of the useSearchParams hook in the SearchNav component.
// In the SearchNav component, the useSearchParams hook is used to obtain the current search parameters from the URL query string. The searchParams 
//object is then derived from the useSearchParams hook by calling the get method with the parameter name, "searchTerm". This allows the searchTerm 
//value from the URL query string to be extracted and stored in the searchParams object.Since the WebSearch component is rendered within the SearchNav 
//component, the searchParams object is accessible within the scope of the WebSearch component. This is due to JavaScript's lexical scoping, where 
//variables declared in an outer scope (such as the SearchNav component) are accessible within the inner scope (such as the WebSearch component) 
//unless shadowed by a variable with the same name.Therefore, in the WebSearch component, you can directly access the searchParams object without 
//it being passed as a prop because it is available within the lexical scope.In summary, the searchParams object is obtained using the useSearchParams 
//hook in the SearchNav component and is accessible within the WebSearch component due to JavaScript's lexical scoping.