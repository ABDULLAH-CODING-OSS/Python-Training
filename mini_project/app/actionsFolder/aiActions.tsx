"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY || "",
});

export async function generateTextAction(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    return response.text || "No output generated";
  } catch (error) {
    console.error("Gemini error:", error);
    return "Gemini is currently unavailable. Please try again later.";
  }
}