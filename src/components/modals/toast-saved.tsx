'use client'
import { useState, useEffect, useCallback} from 'react';
import { usePathname } from 'next/navigation';
import { CircleCheckBig } from "lucide-react";
import { X } from "lucide-react";
import { handleBookmarkAction } from '@/src/lib/actions';

const  ToastNotification=({caseId}: string | undefined) => {
    const [active, setActive]= useState(true);
    const [isExiting, setIsExiting]= useState(false);
    const pathname= usePathname();

    const handleClose= useCallback(()=>{
        setIsExiting(true);
        setTimeout(()=>{
            setActive(false)
        }, 600)

    }, [])

    useEffect(()=>{
        handleBookmarkAction(caseId, true);
        if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', pathname);
    }

        const timer= setTimeout(()=>{
            handleClose()
        }, 7000)
        
        return ()=> clearTimeout(timer);
    },[  pathname, handleClose, caseId]);


    return(
        active ? (
            <div className={`flex flex-row justify-center inset-x-0 mx-auto items-center  gap-2 bg-white w-[300px] max-h-[100px] p-3 absolute z-100 top-4 rounded-2xl
        shadow-[0_0_15px_rgba(79,138,16,0.5)] ${isExiting ? "animate-[bouncerOut_0.5s_ease-in_forwards]"  : "animate-[bouncer_0.6s_ease-out_forwards]" }   `}>
                <CircleCheckBig size={44} color="#4F8A10"/>
                <p className="text-black text-sm">You are signed in and this case has been sucessfully saved! </p>
                <button onClick={handleClose}>
                    <X color="#9ca3af" size={22}/>
                </button>
            </div>
        ) : null
    
    )
}

export default ToastNotification;