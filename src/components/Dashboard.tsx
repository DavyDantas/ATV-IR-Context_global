interface userType {
    name:string
    logout: () => void
}

export default function Dashboard ({name, logout}: userType) {
    return (
        <div className="p-8 flex flex-col w-auto h-auto rounded-4xl gap-1">
            <h1 className="font-bold text-2xl">Seja Bem-Vindo(a)</h1>
            <p className="font-light text-2xl">{name}</p>
            <button onClick={logout} className="mt-5 self-center bg-black rounded-[10px] text-white h-10 w-[150px]">Logout</button>
        </div>
    )
}