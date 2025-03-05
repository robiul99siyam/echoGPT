"use client";
import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import Sidebar from "../main/side-bar/Sidebar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Toggle Sidebar"
        className="text-4xl text-[#7650EC] focus:outline-none"
      >
        <IoReorderThreeSharp />
      </button>

      {/* Sidebar (conditionally rendered) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
