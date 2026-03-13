
'use client'
import {Heart, Bookmark, SendHorizontal} from "lucide-react"
import dynamic from "next/dynamic";
import { useState } from "react";
import SignInModal from "./modals/signin-modal";
import HeartExplosion from "./ui/heart-explosion";
import { usePathname } from "next/navigation";
const Portal=dynamic(()=>import("./modals/portal"), {ssr: false})


const CaseActions=()=>{
    const [showModal, setShowModal]= useState(false);
    const [toggle, setToggle]= useState(false);
    const [bookmark, setBookmark] =useState(false);

    const currentPath= usePathname();
    console.log(currentPath);

    const shareData={
        title: "Case A Day",
        text: "Learn about new cases",
        url: `http://localhost:3000${currentPath}`
    }

 

    const shareLink= async()=>{
        try{
            await navigator.share(shareData);
            console.log('success!')
            
        } catch(e){
            console.log('An error has occurred:', e)
        }
    }

    return(
        <div className="flex flex-col items-center absolute gap-2.5 top-1/2 -translate-y-1/2  right-4 z-20 "> 
            <div className="flex flex-col items-center gap-0.5 relative cursor-pointer">
                <Heart onClick={()=>setToggle(prev=> !prev)} size={24}  
                className={`transition-transform active:scale-75 
                ${toggle ? "text-red-500 fill-red-500" : "text-text-neutral-primary"}`} />
                <span className="text-text-neutral-primary text-xs text-center">267</span>
                <div className=" w-0 h-0 absolute top-1/2 left-1/2 ">
                    {toggle ? <HeartExplosion /> : null}
                </div>
            </div>   
                <button onClick={()=> setShowModal(prev=> !prev)} >
                <Bookmark  size={24} onClick={()=>setBookmark(prev=> !prev)} 
                className={` transition-all text-text-neutral-primary duration-100 ease-out active:scale-75 ${bookmark ? "text-text-neutral-primary fill-text-neutral-primary" : "fill-transparent" }`}/>
                </button>
                { showModal ? 
                    <Portal>
                        <SignInModal onClose={()=>setShowModal(false)}/> 
                    </Portal>
                    : null}
                <SendHorizontal onClick={shareLink} size={24} className="text-text-neutral-primary drop-shadow-md transition-transform duration-150 active:scale-75 ease-in-out "/>
        </div>
    )
}

export default CaseActions;

