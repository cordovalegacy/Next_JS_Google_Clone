import Image from "next/image"
import Link from "next/link"
import SearchBox from "./SearchBox"


const SearchNav = () => {
    return (
        <nav>
            <header className="flex">
                <Link href="/">
                    <Image
                        width={120}
                        height={40}
                        src={'/google_logo.svg'}
                        alt="google logo"
                    />
                </Link>
                <SearchBox />
            </header>
        </nav>
    )
}

export default SearchNav