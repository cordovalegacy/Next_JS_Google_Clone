import Image from "next/image";
import Nav from "./components/Nav";
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      {/* header */}
      <Nav />
      {/* body */}
      <main className="w-full p-5 my-20 space-y-8">
        <Image
          width={300}
          height={300}
          src='/google_logo.svg'
          alt="google logo"
          className="mx-auto"
        />
        <form className="relative mx-auto w-2/5">
          <BsSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <input
            type="text"
            className="w-full pl-10 pr-14 py-2 rounded-full border border-gray-200 hover:shadow-md shadow-gray-600 bg-white"
            placeholder="Search Google or type a URL"
          />
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <Image
              src="/google_voice.svg"
              alt="voice search"
              width={20}
              height={20}
              className="hover:cursor-pointer hover:brightness-90"
            />
          </div>
        </form>
      </main>
    </>
  );
}
