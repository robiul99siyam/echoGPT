import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { remark } from "remark";
import html from "remark-html";

export default function ChatResponse({ responses, error, value, loading }) {
  const [formattedResponse, setFormattedResponse] = useState("");

  useEffect(() => {
    if (responses?.response) {
      remark()
        .use(html)
        .process(responses.response)
        .then((file) => setFormattedResponse(String(file)));
    }
  }, [responses?.response]);

  return (
    <>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {loading && (
        <div className="text-2xl flex justify-start items-center text-[#7650EC] font-bold">
          <FaSpinner className="animate-spin h-5 w-5 mr-3" /> Processing...
        </div>
      )}

      <div className="h-[55vh] overflow-y-auto flex flex-col justify-center items-center">
        {responses?.response ? (
          <div
            className="p-4 rounded-lg overflow-auto"
            dangerouslySetInnerHTML={{ __html: formattedResponse }}
          />
        ) : (
          !value && (
            <>
              <Image
                src="/logo.svg"
                alt="EchoGPT Logo"
                width={50}
                height={50}
                priority
                className="mx-auto"
              />
              <h1 className="text-center">
                Interact with EchoGPT, an AI that reflects your input for
                <br />
                quick ideas, summaries, or feedback. Perfect for
              </h1>
            </>
          )
        )}
      </div>
    </>
  );
}
