"use client";

import Image from "next/image";
import ChevronFirst from "../atoms/icons/ChevronFirst";
import MoreVertical from "../atoms/MoreVertical";
import { use, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import ChevronLast from "../atoms/icons/ChevronLast";


const SidebarContext = createContext(false);

export default function NavBar({ children } : Readonly<{ children: React.ReactNode }>) {
  const [expanded, setExpanded] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <aside className={`${!expanded || !isMobile ? "sticky top-0 h-screen border-r" : "fixed top-0 h-screen border-r z-50"}`} >
      <nav className="h-full w-fit flex flex-col bg-sky-950 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center ">
          <Image
            className={`overflow-hidden transition-all ${expanded ? "w-36" : "w-0"}`}
            src="/logoCinema.svg"
            alt="logo"
            width={50}
            height={70}
            priority
          />
          <button onClick={() => setExpanded(current => !current)} className="p-1.5 rounded-lg bg-sky-900 hover:bg-blue-200" >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">
            {children}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <Image
            className="w-10 h-10 rounded-md"
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="profile"
            width={50}
            height={50}
            priority
        />

          <div className={`flex justify-between items-center
                          overflow-hidden trnasition-all ${expanded ? "w-52 ml-3" : "w-0"}
                          `}>

            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-400">johndoe@gmail.com </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

type SidebarItemProps = {
  icon: any;
  text: string;
  active?: boolean;
  alert?: boolean;
  href?: string;
};

export function SidebarItem({ icon, text, active, alert, href} : SidebarItemProps) {
  const expanded = useContext(SidebarContext);

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 
                    font-medium rounded-md group
                    cursor-pointer transition-colors 
                    ${active ? "bg-gradient-to-tr from-sky-300 to-sky-500 text-sky-800"
                              : "hover:bg-sky-500 text-gray-100"
                     }
                  `}
    >
      {icon}

      <span className={`overflow-hidden transition-all ${
                        expanded ? "w-52 ml-3" : "w-0"
                      }`}
      >
        {text}
      </span>

      {alert && (
        <div 
          className={`absolute right-2 w-2 h-2 rounded 
                  bg-sky-400 ${
                    expanded ? "" : "top-2"
                  } `} 
        />
        
      )}
      {!expanded && (
        <div 
          className={`absolute left-full rounded-md px-2 py-1 ml-6
                      bg-sky-400 text-sky-800 text-sm
                      invisible opacity-20 -translate-x-3 transition-all
                      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
