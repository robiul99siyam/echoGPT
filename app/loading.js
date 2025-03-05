import Image from "next/image";

export default function Loading() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-10 min-h-screen"
      role="status"
      aria-live="polite"
    >
      <Image src="/logo.svg" alt="EchogPT Logo" width={50} height={50} />
      <div aria-hidden="true">
        <h1 className="text-3xl font-bold text-[#7650EC] tracking-[8px]">
          EchogPT
        </h1>
      </div>
    </section>
  );
}
