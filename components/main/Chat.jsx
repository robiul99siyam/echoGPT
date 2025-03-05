import Image from "next/image";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { SlCursor } from "react-icons/sl";

export default function Chat() {
  return (
    <div className="w-full p-5 mt-3 bg-white shadow-md rounded-md border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="EchogPT Logo"
            width={24}
            height={24}
            priority
          />
          <h1 className="text-lg font-semibold text-gray-800">EchogPT</h1>
          <Image
            src="/roket.svg"
            alt="Send Message"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-700">
          <Link href="/" className="font-extrabold" aria-label="Add New Chat">
            <CiCirclePlus />
          </Link>
          <button aria-label="Chat History">
            <GoHistory className="font-extrabold" />
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="flexed lg:relative mt-3">
        <input
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-[1px] focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder="Type a message..."
          aria-label="Chat Input"
        />
        <button
          aria-label="Send Message"
          className="absolute right-3 top-[89%] lg:top-1/2 transform  sm:-translate-x-[50px] lg:-translate-x-0 lg:-translate-y-1/2 text-gray-500 hover:text-[#7650EC]"
        >
          <SlCursor />
        </button>
      </div>
    </div>
  );
}
