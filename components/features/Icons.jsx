import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
export default function Icons() {
  return (
    <div className="sticky bottom-0 flex justify-between items-center gap-10 px-4 bg-white text-xl font-extrabold transform duration-1000">
      {" "}
      <Link href="https://appifydevs.com/" target="_blank">
        {" "}
        <IoHomeOutline />
      </Link>
      <FaShareAlt />
      <IoSettingsOutline />
      <MdLightMode />{" "}
    </div>
  );
}
