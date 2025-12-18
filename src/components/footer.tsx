
import { LibraryBig, CalendarDays, Scale} from "lucide-react";


const Footer=() =>{
    return(
    <div className="flex flex-row h-[54px] justify-between pr-[30px] pl-[30px] items-center bg-footer-gradient">
        <div className=" flex flex-col gap-[5px] items-center">
            <CalendarDays className="text-text-on-brand justify-center"/>
            <span className="text-text-on-brand text-[8px]">Today</span>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
            <Scale className="text-text-neutral-secondary"/>
            <span className="text-text-neutral-secondary text-[8px]">Discover</span>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
            <LibraryBig className="text-text-neutral-secondary"/>
            <span className="text-text-neutral-secondary text-[8px]">Library</span>
        </div>
    </div>
    )
}

export default Footer;