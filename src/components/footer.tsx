'use client'


import { LibraryBig, CalendarDays, Scale} from "lucide-react";
import Link from "next/link";
//import { PathName } from "./path-name";
import { usePathname } from "next/navigation";
    
const Footer=() =>{
    
    const pathName= usePathname()


    return(
    <div className="flex flex-row h-[54px]  justify-between pr-[30px] pl-[30px] items-center bg-footer-gradient">
        <Link href="/" className=" flex flex-col gap-[5px] items-center">
            <CalendarDays 
             className={ pathName === "/" ? "text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName === "/" ? "text-text-on-brand" : "text-text-neutral-secondary"}`}>Today</span>
        </Link>
    
        <Link href="/discover"  className= {`     flex flex-col gap-[5px] items-center`}>
            <Scale   className={ pathName === "/discover" ? "text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName === "/discover" ? "text-text-on-brand" : "text-text-neutral-secondary"}`}>Discover</span>
        </Link>
        <Link href="/library" className="flex flex-col gap-[5px] items-center">
            <LibraryBig  className={ pathName === "/library" ? "text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName === "/library" ? "text-text-on-brand" : "text-text-neutral-secondary"}`}>Library</span>
        </Link>
    </div>
    )
}

export default Footer;