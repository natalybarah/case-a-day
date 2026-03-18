
'use client'
import CaseCardLight from "@/src/components/case-card-light";
import PartialLibrary from "../../../components/partial-library";
//import EmptyLibrary from "@/src/components/empty-library";
import { useState} from "react";
import { Heart } from "lucide-react";

import { CaseCardLightSkeleton } from "@/src/components/case-card-light";
import CaseCard from "@/src/components/case-card";

const Library = ()=> {

   const [toggle, setToggle] =useState(false)



    return(
        <div className=" flex flex-col bg-library h-dvh pt-4 p-4 gap-7.5">
            <h1 className="font-black font-fraunces text-text-brand-emphasis text-[40px]">Your docket</h1>
            <div className=" flex flex-col gap-2.5">
                <CaseCardLight/>
                <CaseCardLight/>
                <CaseCardLight/>
               
                
            </div>
            <div className="flex flex-col items-center justify-center m-auto translate-y-[-54px]">
            
           
                    <div className="relative ">
                        <Heart onClick={()=>setToggle(prev=> !prev) }  
                        className={`${toggle ? "animate-[filler_0.4s_ease-in-out_forwards]" : "text-text-neutral-primary"}`}>
                         </Heart>
                        <div className=" w-0 h-0 absolute top-1/2 left-1/2 ">
                             {toggle ? <div></div>: null}
                        </div>
                    </div>
           
           {/*  <PartialLibrary/> 
                 <EmptyLibrary  />*/}

            </div>
        </div>
       
        
    )
}

export default Library;
