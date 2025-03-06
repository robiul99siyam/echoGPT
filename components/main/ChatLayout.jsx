"use client";
import { useState } from "react";
import Chat from "./Chat";
import ChatResponse from "./ChatResponse";

export default function ChatLayout() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState({});
  const [error, setError] = useState("");
  console.log(responses);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://echo-gpt-sooty.vercel.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponses(data);
      setMessage("");
    } catch (e) {
      console.error("Error occurred:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      role="status"
      aria-live="polite"
      className="flex flex-col px-4 lg:px-10"
    >
      {/* Main Chat Area */}
      <ChatResponse
        responses={responses}
        error={error}
        loading={loading}
        value={message}
      />

      <main
        role="main"
        className="flex flex-col flex-grow justify-end items-center gap-10 text-center overflow-y-auto"
      >
        {/* Chat input and message display */}
        <Chat
          handleSubmit={handleSubmit}
          message={message}
          setMessage={setMessage}
        />
      </main>
    </section>
  );
}
