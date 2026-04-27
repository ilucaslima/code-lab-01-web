import { Bell, PlusSquare, User } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-7 bg-black text-white">

        {/* logo */}
        <div className="text-xl font-bold text-pink-500">
            CodePlay
        </div>

        {/* pesquisar */}
        <div>
            <input type="text" placeholder="procure seu vídeo" className="bg-transparent outline-none text-sm w-full"/>
        </div>

        {/*Ações*/}
        <div className="flex items-center gap-4">
            
            <PlusSquare className="cursor-pointer"/>
            
            <Bell className="cursor-pointer"/>

            <button className="bg-pink-500 px-4 py-1 rounded-full text-sm font-medium hover:bg-pink-600">
                Upload
            </button>

            <User className="cursor-pointer"/>
        </div>
        </header>
    );
}
