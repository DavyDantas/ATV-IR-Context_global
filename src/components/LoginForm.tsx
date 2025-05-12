"use client"

import { useState } from "react"

interface loginType {
    login: (user: string) => void;
}

export default function LoginForm({login}:loginType) {
    const [name, setName] = useState('')

    return (
        <div className="flex flex-col rounded-2xl p-4 justify-center items-center gap-2.5 w-[400px]">
            <label className="text-2xl" htmlFor="name">Insira seu nome</label>
            <input className=" bg-gray-500 p-2 rounded-full h-9 outline-none w-full" onChange={(e) => setName(e.target.value)} name="name" type="text" id="name"/>
            <button className="mt-6 bg-black rounded-[10px] text-white h-10 w-[150px] " onClick={() => login(name)}>Entrar</button>
        </div>
    )
}