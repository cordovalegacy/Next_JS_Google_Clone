// !this component is used in searchNav.jsx file
"use client"

//!SearchNavOptions allows us to select a tab, and configures searchTerm accordingly
const SearchNavOptions = ({ Search, pathname, selectTab }) => {
    return(
        <div className="flex items-center gap-6 px-8 lg:pl-52 border-b-2 justify-center border-slate-200 lg:justify-start">
            <div
            onClick={() => selectTab("All")}
            className={`${pathname === "/search/web" && "!text-blue-600 space-x-1 !border-b-4 !border-b-blue-600"} flex items-center justify-between cursor-pointer w-10 active:text-blue-500`}
            >
                <Search />
                <p className="text-lg">All</p>
            </div>
            <div
            onClick={() => selectTab("Images")}
            className={`${pathname === "/search/image" && "!text-blue-600 !border-b-4 !border-b-blue-600"} cursor-pointer active:text-blue-500`}
            >
                <p className="text-lg">Images</p>
            </div>
        </div>
    )
}

export default SearchNavOptions