
//bg-brand-solid/14
const AttorneyCardSkeleton= ()=>{
    
        return(
        <div className="flex flex-row gap-3 min-w-[221px]  rounded-[999em]">
                <div className="min-w-16 min-h-16  rounded-[999em] bg-white/10 animate-pulse">
                         
                </div>
            <div className="flex flex-col w-full gap-2 mt-1.5 animate-pulse">
                <div className="w-[80%] bg-white/10 h-3 rounded-sm"></div>
                <div className="w-[80%] bg-white/10 h-2 rounded-sm"></div>
                <div className="w-[80%] bg-white/10 h-2 rounded-sm"></div>
               
            </div>
        </div>
    )
}

export default AttorneyCardSkeleton;