import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { SlCursor } from "react-icons/sl";
import Default from "./Default";

export default function Chat({ message, setMessage, handleSubmit }) {
  return (
    <div className="w-full p-5 mt-3 bg-white shadow-md rounded-md border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Default />
        <div className="flex items-center gap-3 text-xl text-gray-700">
          <Link href="/" aria-label="Add New Chat">
            <CiCirclePlus />
          </Link>
          <button aria-label="Chat History">
            <GoHistory className="font-extrabold" />
          </button>
        </div>
      </div>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className="lg:relative mt-3">
        <textarea
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-[1px] focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder="Type a message..."
          aria-label="Chat Input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          aria-label="Send Message"
          type="submit"
          className="absolute right-3 top-[89%] lg:top-1/2 transform sm:-translate-x-[50px] lg:-translate-x-0 lg:-translate-y-1/2 text-gray-500 hover:text-[#7650EC]"
        >
          <SlCursor />
        </button>
      </form>
    </div>
  );
}
