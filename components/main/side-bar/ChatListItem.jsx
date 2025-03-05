import Link from "next/link";

export default function ChatListItem({ item }) {
  return (
    <Link
      href={`/${item.title}`}
      className="w-[95%] mr-auto rounded-lg py-4 px-3  text-[18px]  text-gray-800 flex justify-start items-center gap-3 hover:bg-gray-200  "
    >
      {" "}
      <span className="text-[20px] text-black font-bold">{item.icon}</span>{" "}
      {item.title}
    </Link>
  );
}
