'use client'


import { LibraryBig, CalendarDays, Scale} from "lucide-react";
import Link from "next/link";
//import { PathName } from "./path-name";
import { usePathname, useSearchParams} from "next/navigation";
    
const Footer=() =>{
    
    const pathName= usePathname();
    const searchParams= useSearchParams();
    const fromLocation= searchParams.get("from");

    return(
    <div className="flex flex-row h-[54px]  justify-between pr-[30px] pl-[30px] items-center bg-footer-gradient">
        <Link href="/" className="transition-all active:scale-75 duration-150 ease-in flex flex-col gap-[5px] items-center">
            <CalendarDays 
             className={ pathName === "/" ? " text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName === "/" ? " text-text-on-brand" : "text-text-neutral-secondary"}`}>Today</span>
        </Link>
    
        <Link href="/discover"  className= {`transition-all active:scale-75 duration-150 ease-in flex flex-col gap-[5px] items-center`}>
            <Scale   className={ pathName.startsWith("/discover") || fromLocation ==="discover" ? " text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName.startsWith("/discover") || fromLocation ==="discover" ? "text-text-on-brand" : "text-text-neutral-secondary"}`}>Discover</span>
        </Link>
        <Link href="/library" className=" transition-all active:scale-75 duration-150 ease-in flex flex-col gap-[5px] items-center">
            <LibraryBig  className={ pathName.startsWith("/library") || fromLocation ==="library" ? " text-text-on-brand" : "text-text-neutral-secondary"}/>
            <span className={`text-[8px] ${ pathName.startsWith("/library") || fromLocation ==="library"  ? " text-text-on-brand" : "text-text-neutral-secondary"}`}>Library</span>
        </Link>
    </div>
    )
}

export default Footer;