
import {Heart, Bookmark, SendHorizontal} from "lucide-react"

const CaseActions=()=>{

    return(
        <div className="flex flex-col items-center absolute gap-2.5 top-1/2 -translate-y-1/2  right-2 z-20"> 
            <div className="flex flex-col items-center gap-0.5">
                <Heart size={24} className="text-text-neutral-primary "/>
                <span className="text-text-neutral-primary text-xs text-center">267</span>
            </div>
                <Bookmark size={24} className="text-text-neutral-primary "/>
                <SendHorizontal size={24} className="text-text-neutral-primary "/>
            
        </div>
    )
}

export default CaseActions;
