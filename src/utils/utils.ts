'use client'
import { usePathname } from "next/navigation";

export const usePathNavigation= ()=>{
    const pathName= usePathname();
    return pathName;

}

export default usePathNavigation;
