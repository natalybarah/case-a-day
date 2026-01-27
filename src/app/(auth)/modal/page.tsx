
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Modal=()=>{
    return(
        <div className="bg-pink-400 w-[180px] h-[180px]">
            <Link href="/signup">
            <ArrowLeft/>
            </Link>
            <h1 className="pt-8"> I AM A MODAL</h1>
        </div>
    )
}

export default Modal;