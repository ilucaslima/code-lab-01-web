"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  Home, 
  Upload, 
  Library, 
  History, 
  ThumbsUp, 
  Clock, } 
from "lucide-react";
export default function Sidebar() {
  const pathname = usePathname();


  const menu = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Uploads", icon: Upload, path: "/upload" },
    { name: "Library", icon: Library, path: "/library", clickable: false },];

  const activity = [
    { name: "History", icon: History },
    { name: "Liked Videos", icon: ThumbsUp },
    { name: "Watch Later", icon: Clock },];


  return ( 

    <aside className="w-57 h-274.75 pt-4 pr-3 pb-4 pl-3 rotate-0 opacity-100 bg-[#131313]"> 
  
  
      <h1 className=" pl-4 text-primary text-sm font-family font-medium mb-6 uppercase">
      navigation
      </h1> 
      
      
      <nav className="flex flex-col gap-4 pl-1"> 
        {menu.map((item) => { 
          const isActive = pathname.startsWith(item.path);
          const Icon = item.icon; 
          if (item.clickable === false) { 
            return (
             <div 
              key={item.name} 
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-primary" >
                
              <Icon size={25} /> 
              
              <span className="text-sm">
               {item.name}
              </span>
                  
             </div> );
          } 
                  
         return ( 
          <Link   
            key={item.name}
            href={item.path} 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive 
                ? "bg-zinc-800 text-primary" 
                : "text-zinc-400 hover:bg-zinc-800 hover:text-primary" }`} >
                          
            <Icon size={25} /> 

            <span className="text-sm">{item.name}
            </span>

          </Link> ); 
          })} 
      </nav> 


      <div className="my-6 border-t border-zinc-800" />
                            
         <div> 
            <p className="pl-4 text-xs text-zinc-400 mb-3 uppercase">
             Your Activity
            </p>

            <nav className="flex flex-col gap-4 pl-1"> 
               {activity.map((item) => { 
                const Icon = item.icon; 
             return ( 
              <div key={item.name} 
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400" >
                <Icon size={25} /> 
                <span className="text-sm">{item.name}</span> 
              </div> );
                })} 
            </nav> 
      </div> 
    </aside > 
  );

}