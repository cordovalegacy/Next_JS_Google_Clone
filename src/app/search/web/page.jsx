// !this component is used in the search/layout.jsx file as {children}

const WebSearch = async({ searchParams }) => {

    const query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    const res = await fetch(query)
    const data = await res.json()
    // console.log("Data----->",data)
    const results = data.items //data.items is an array

    return(
        <>
        {results && results.map((res) => (
            <h2>{res.title}</h2>
        ))}
        </>
    )
}

export default WebSearch