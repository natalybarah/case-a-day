
import { Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";

type InputProps={
    name: string,
    icon: LucideIcon,
    inputType: string,
    placeholder: string
}
const UserInput = ({name, icon: Icon, inputType, placeholder}: InputProps)=>{

    return(
       <div className="flex flex-row gap-3 border-white/12 border p-3 rounded-2xl ">
            <div className="text-text-neutral-secondary">
                <Icon/>
            </div>
            <input className=" text-text-neutral-primary font-semibold text-[16px] outline-none" type={inputType} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default UserInput;