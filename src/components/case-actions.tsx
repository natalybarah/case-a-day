
'use client'
import {Heart, Bookmark, SendHorizontal} from "lucide-react"
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import SignInModal from "./modals/signin-modal";
const Portal=dynamic(()=>import("./modals/portal"), {ssr: false})


const CaseActions=()=>{
    const [showModal, setShowModal]= useState(false)




    return(
        <div className="flex flex-col items-center absolute gap-2.5 top-1/2 -translate-y-1/2  right-2 z-20 "> 
            <div className="flex flex-col items-center gap-0.5">
                <Heart size={24} className="text-text-neutral-primary "/>
                <span className="text-text-neutral-primary text-xs text-center">267</span>
            </div>   
                <button onClick={()=> setShowModal(!showModal)} >
                    <Bookmark  size={24} className="text-text-neutral-primary "/>
                </button>
                {showModal ? 
                
               
                <Portal>
                    <SignInModal onClose={()=>setShowModal(false)}/> 
                </Portal>
                
                
                
                : null}
                <SendHorizontal size={24} className="text-text-neutral-primary "/>
            
        </div>
    )
}

export default CaseActions;
