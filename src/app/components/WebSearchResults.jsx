import Link from "next/link"
import PaganationButtons from "./PaganationButtons"

const WebSearchResults = ({ data }) => {

    // console.log("data in web results ---->", data)

    return (
        <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[18%]">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {data.searchInformation?.formattedTotalResults} results in ({data.searchInformation?.formattedSearchTime}) seconds
            </p>
            <div className="flex flex-col gap-5 w-4/5">
                {data.items.map((res) => (
                    <div key={res.link}>
                        <Link
                            href={res.link}
                            className="text-sm"
                        >{res.formattedUrl}
                        </Link>
                        <Link href={res.link}>
                            <h2 className="text-lg hover:text-blue-600 text-blue-800 font-semibold tracking-wide lg:line-clamp-1 line-clamp-3 hover:underline decoration-blue-800">{res.title}</h2>
                        </Link>
                        <p className="line-clamp-2 w-4/5">{res.snippet}</p>
                    </div>
                ))}
            </div>
            <PaganationButtons />
        </div>
    )
}

export default WebSearchResults