import Image from "next/image";

export default function ChatResponse() {
  return (
    <div className="h-[60vh] border border-green-500  overflow-y-auto flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="EchogPT Logo"
        width={50}
        height={50}
        priority
        className="mx-auto"
      />
      <h1 className="text-center">
        Interact with EchoGPT, an AI that reflects your input for <br />
        quick ideas, summaries, or feedback. Perfect for
      </h1>
    </div>
  );
}
