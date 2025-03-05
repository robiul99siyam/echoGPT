import Link from "next/link";
import { FaRegPenToSquare } from "react-icons/fa6";
export default function NewChat() {
  return (
    <Link
      href="/"
      className=" w-[90%] mr-auto rounded-lg py-3 border border-purple-200 shadow text-[18px] text-purple-500 flex justify-center items-center gap-3  "
    >
      <FaRegPenToSquare /> New Chat
    </Link>
  );
}
