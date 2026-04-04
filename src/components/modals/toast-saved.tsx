import { CircleCheckBig } from "lucide-react";
import { X } from "lucide-react";


const  ToastNotification=()=> {

    return(
        <div className="flex flex-row justify-center items-center right-1/2 translate-x-1/2 gap-2 bg-white w-[300] max-h-[100px] p-3 absolute z-100 top-4 rounded-2xl
       shadow-[0_0_15px_rgba(79,138,16,0.5)] ">
            <CircleCheckBig size={44} color="#4F8A10"/>
            <p className="text-black text-sm">You are signed in and this case has been sucessfully saved! </p>
            <X color="#000" size={34}/>
           
        </div>
    )
}

export default ToastNotification;