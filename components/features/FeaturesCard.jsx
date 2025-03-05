"use client";

import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
export default function FeaturesCard() {
  const [show, setShow] = useState(true);
  return (
    <section
      className={`${
        show ? "w-full h-48 z-50 sticky bottom-0 bg-white px-4 mt-5 " : "hidden"
      } `}
      aria-labelledby="pro-features-heading"
    >
      <div
        aria-hidden="true"
        className="flex justify-between items-center gap-10"
      >
        <h1
          id="pro-features-heading"
          className="text-black font-bold text-[18px] "
        >
          Unlock Pro Features
        </h1>
        <BiErrorCircle
          onClick={() => setShow(false)}
          className="text-2xl font-bold cursor-pointer"
        />
      </div>
      <p className="text-start mb-4 text-sm mt-4">
        With statistics on your shot and profile performance, available to Pros.
      </p>

      <button
        // Optional feature toggle, if needed
        className="w-full py-3 px-5 bg-black text-lime-50 rounded-lg"
        aria-label="Upgrade to pro"
      >
        Upgrade to Pro
      </button>
    </section>
  );
}
