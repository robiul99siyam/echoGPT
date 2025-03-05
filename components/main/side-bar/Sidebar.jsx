"use client";
import FeaturesCard from "@/components/features/FeaturesCard";
import Icons from "@/components/features/Icons";
import NewChat from "@/components/NewChat";
import { EngagementDataStore, HelpAndSupportDataStore } from "@/static-json";
import { IoClose } from "react-icons/io5";
import ChatListItem from "./ChatListItem";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        role="complementary"
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transition-transform duration-300 z-50 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:w-full md:max-h-[80vh] overflow-y-auto`}
      >
        {/* Close Button for Mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close Sidebar">
            <IoClose className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <NewChat />

        <p className="py-4 text-[12px]">Engagement</p>
        <div className="flex flex-col justify-center items-center">
          {EngagementDataStore.map((item) => (
            <ChatListItem key={item.id} item={item} />
          ))}
        </div>

        <p className="py-4 text-[12px]">Help & Support</p>
        <div className="flex flex-col justify-center items-center gap-3">
          {HelpAndSupportDataStore.map((item) => (
            <ChatListItem key={item.id} item={item} />
          ))}
        </div>

        {/* Features */}
        <FeaturesCard />
        <Icons />
      </aside>
    </>
  );
}
