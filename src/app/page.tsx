"use client"
import ThemeContext from "@/context/ThemeContext";
import AuthContext from "@/context/AuthContext"
import { useContext } from "react";
import Dashboard from "@/components/Dashboard";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const context = useContext(ThemeContext)
  const userContext = useContext(AuthContext)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="justify-center items-center flex flex-row p-4 h-20">
        <button className={`text-xl font-semibold px-3 py-2 rounded-3xl ${context?.theme === 'light' ? "bg-black text-white":"bg-white text-black"}`} onClick={context?.toggleTheme}>Mudar tema</button>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full h-full">
        {userContext?.user ? 
        <Dashboard logout={userContext?.logout} name={userContext?.user}/> 
        : <LoginForm login={userContext?.login || (() => {})}/>
        }
      </main>
    </div>
  );
}
