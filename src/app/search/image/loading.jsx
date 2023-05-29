const Loading = () => {
    return (
        <div className="w-4/6 mx-auto mt-10 flex flex-wrap items-center gap-6 opacity-80">
            <div className="bg-gray-200 rounded-md w-40 h-40"></div>
            <div className="hidden sm:inline-flex md:inline-flex gap-6">
                <div className="bg-gray-200 rounded-md w-40 h-40"></div>
                <div className="bg-gray-200 rounded-md w-40 h-40"></div>
            </div>
        </div>
    );
}

export default Loading;
