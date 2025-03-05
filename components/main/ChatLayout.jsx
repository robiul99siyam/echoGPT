import Chat from "./Chat";
import ChatResponse from "./ChatResponse";

export default function ChatLayout() {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex flex-col px-4 lg:px-10"
    >
      {/* Main Chat Area */}
      <ChatResponse />
      <main
        role="main"
        className="flex flex-col flex-grow justify-end items-center gap-10 text-center overflow-y-auto"
      >
        {/* Chat messages */}

        <Chat />
      </main>

      {/* Sidebar (if needed) */}
    </section>
  );
}
