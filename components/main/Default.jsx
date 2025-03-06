import Image from "next/image";

export default function Default() {
  return (
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
  );
}
