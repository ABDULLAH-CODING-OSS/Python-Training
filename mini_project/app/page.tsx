
"use client";

import { useState } from "react";
import Image from "next/image";
import { generateTextAction } from "@/app/actionsFolder/aiActions";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSendPrompt = async () => {
    const result = await generateTextAction(prompt);
    setResponse(result);
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between p-24">
      {response && (
        <div className="output-area w-full h-[80%] overflow-y-auto border p-4 rounded-md">
          <p className="text-lg">{response}</p>
        </div>
      )}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full">
        <input
          className="border p-2 w-[80%] rounded-md outline-none"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button
          className="bg-neutral-700 text-white p-2 cursor-pointer rounded-md ml-4 w-[18%] hover:bg-neutral-600 transition-all"
          onClick={handleSendPrompt}
        >
          Send
        </button>
      </div>
    </main>
  );
}
