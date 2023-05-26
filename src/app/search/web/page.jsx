// !this component is used in the search/layout.jsx file as {children}

const WebSearch = async() => {

    const query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`
    const res = await fetch(query)

    return(
        <h1>Web Search Page</h1>
    )
}

export default WebSearch