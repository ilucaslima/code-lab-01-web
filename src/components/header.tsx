"use client"

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { useUserStore } from "@/stores/useUserStore";
import Button from "./ui/button";

export function Header() {
    const { user } = useUserStore()
    return (
        <header className="flex items-center justify-between px-6 py-7 bg-black text-white">

        <div className="text-[20px] text-[#FF8B9B] font-bold">
            CodePlay
        </div>

        <div className="w-[384px] bg-[#262626] py-3 px-4 rounded-full flex items-center gap-3">
            <Search className="text-white/50" />
            <input type="text" placeholder="Procure seu vídeo" className="bg-transparent outline-none text-sm w-full"/>
        </div>

        <div className="flex items-center gap-4">
            <button className="text-[#FF8B9B] flex items-center gap-2" type="button">
                <Image alt="plus icon" src="/plusVideoIcon.svg" width={19} height={16} />
                <p>
                    Upload
                </p>
            </button>
            <Bell className="cursor-pointer"/>

<Button   className="rounded-full">
                <Image
                    src={user?.avatarUrl || "https://i.pravatar.cc/300"}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                />
            
    </Button>       
     </div>
        </header>
    );
}
