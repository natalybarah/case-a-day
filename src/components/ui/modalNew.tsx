
'use client'

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {useRouter} from 'next/navigation';


const ModalNew=({children}: {children: React.ReactNode})=>{

    const router= useRouter()
    return(
        <div className="bg-pink-400 w-[180px] h-[180px]">
            {/*<Link href="/signup">
            <ArrowLeft/>
            </Link>*/}

            <h1 className="pt-8"> I AM A MODAL</h1>
            <Link href="/signin">signin</Link>
           {/*<button onClick={()=>{router.back()}}>close the modal</button>*/}
            <div>{children}</div>
        </div>
    )
}

export default ModalNew;