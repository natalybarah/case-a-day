
'use client'
import {Heart, Bookmark, SendHorizontal} from "lucide-react"
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import SignInModal from "./modals/signin-modal";
import HeartExplosion from "./ui/heart-explosion";
const Portal=dynamic(()=>import("./modals/portal"), {ssr: false})


const CaseActions=()=>{
    const [showModal, setShowModal]= useState(false)
    const [toggle, setToggle]= useState(false)
    const [themeIndex, setThemeIndex] = useState(0)

const poppingClasses= [
    "text-red-500 fill-red-500 drop-shadow-lg",
    "text-white fill-white drop-shadow-lg",
    "text-brand-solid fill-brand-solid drop-shadow-lg"
]

const themesFiller=[     
          "animate-[fillerRed_0.4s_ease-in-out_forwards] ",
            "animate-[fillerWhite_0.4s_ease-in-out_forwards] ",
            "animate-[fillerPurple_0.4s_ease-in-out_forwards] "      
]

    let ip=0;
    let rotateTheme= themesFiller[themeIndex]
    let rotateExplosion= poppingClasses[themeIndex]
    const operateFn=()=>{
        if(ip< themesFiller.length -1){
            
           
            setTimeout(()=>{
                ip++
                setThemeIndex(ip)
                operateFn()
            }, 1500)
        }else{ setTimeout(() => {
                ip = 0;
                setThemeIndex(ip); 
                operateFn(); 
            }, 1500);}
    }
   

    return(
        <div className="flex flex-col items-center absolute gap-2.5 top-1/2 -translate-y-1/2  right-4 z-20 "> 
            <div className="flex flex-col items-center gap-0.5 relative cursor-pointer">
                <Heart onClick={()=>{setToggle(prev=> !prev); operateFn()}} size={24}  className={`${toggle ? rotateTheme : "text-text-neutral-primary"} `}/>
              {/*  <span className="text-text-neutral-primary text-xs text-center">267</span>*/}
                <div className=" w-0 h-0 absolute top-1/2 left-1/2 ">
                             {toggle ? <HeartExplosion key={themeIndex} rotateExplosion={rotateExplosion}/> : null}
                        </div>
            </div>   
                <button onClick={()=> setShowModal(prev=> !prev)} >
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

