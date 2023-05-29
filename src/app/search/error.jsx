"use client"
import { useEffect } from "react"
const Error = ({ err, reset }) => {

    useEffect(() => {
        console.log("Error ----->", err);
    }, [err])

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl p-4 m-4">Woops! Something went wrong..</h1>
            <button
                className="bg-blue-500 text-white rounded-md p-1"
                onClick={() => reset()}
            >Try Again</button>
        </div>
    )
}

export default Error