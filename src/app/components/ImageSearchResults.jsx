import Link from "next/link"
import PaganationButtons from "./PaganationButtons"

const ImageSearchResults = ({ data }) => {

    console.log("data in image results ---->", data)
    console.log(data.items[0].image)

    return (
        <div className="w-full mx-auto px-5 pb-24">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {data.searchInformation?.formattedTotalResults} results in ({data.searchInformation?.formattedSearchTime}) seconds
            </p>
            <div className="flex flex-wrap gap-5 w-full">
                {data.items.map((res) => (
                    <div key={res.link} className="flex flex-col gap-3 mb-10 lg:w-[23.6%] md:w-[40%] sm:w-[25%] hover:scale-105 transition duration-150">
                        <Link href={res.image.contextLink}>
                            <img
                                className="lg:w-80 md:w-60 sm:w-40 lg:h-60 md:h-40 sm:h-20 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-400"
                                src={res?.link}
                                alt={res.title}
                            />
                        </Link>
                        <Link
                            href={res.link}
                            className="text-sm"
                        >{res.displayLink}
                        </Link>
                        <Link href={res.link}>
                            <h2 className="text-sm line-clamp-3 hover:text-blue-600 text-blue-800 font-semibold tracking-wide lg:line-clamp-1  hover:underline decoration-blue-800">{res.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="w-full ml-[15%]">
                <PaganationButtons />
            </div>
        </div>
    )
}

export default ImageSearchResults