import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white sticky top-0 mb-2">
      {/* Logo Section */}
      <MobileNav />
      <Link
        className="flex items-center gap-5"
        href="/"
        aria-label="EchogPT Home"
      >
        <Image
          src="/logo.svg"
          alt="EchogPT Logo"
          width={50}
          height={50}
          priority
        />
        <h1 className="text-3xl font-bold text-[#7650EC] tracking-[8px]">
          EchogPT
        </h1>
      </Link>

      {/* Profile Section */}
      <nav>
        <Image
          className="rounded-full h-[70px] w-[70px]"
          src="/siyam.png"
          alt="User Profile Picture"
          width={70}
          height={70}
          loading="lazy"
        />
      </nav>
    </header>
  );
}
