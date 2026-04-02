'use client'
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


const BackButton= ({className}: {className?: string})=> {

    const router= useRouter();

    return(
            <button onClick={()=> router.back()}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-black/30  hover:bg-black/50
                    backdrop-blur-sm transition-all ${className}`}>
                <ArrowLeft color="#C7CDD4"/>
            </button>
    )
}

export default BackButton;