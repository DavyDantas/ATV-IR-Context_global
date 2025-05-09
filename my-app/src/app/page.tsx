"use client"
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(ThemeContext)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <button onClick={context?.toggleTheme}>Toggle Theme</button>
      <p className="text-2xl">Current theme: {context?.theme}</p>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-4 p-8 border-2 border-dashed rounded-lg">
        dkoadokasodksad
      </div>
    </div>
  );
}
