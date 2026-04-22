
const CollectionCardSkeleton =(props: {key: number, isnew: boolean})=>{

    return(
    
           <div className={`  flex flex-col items-start p-2.5  relative ${props.isnew? "w-full" : "w-[calc(50%-0.5rem)]"}  bg-cover ${props.isnew ? "aspect-video"  : "aspect-3/4"}   max-h-40 xs:max-h-none shadow-[0_8px_24px_rgba(0,0,0,0.35)] rounded-2xl animate-pulse`}>
            <div  className="absolute  inset-0 w-full h-full bg-brand-solid/14 rounded-2xl">
                
            </div>
                <div className="relative z-10 h-full justify-end flex flex-col w-full gap-2">
                    <div className={`bg-white/10 h-6  rounded ${props.isnew ? "w-[90%]" : "w-full"} `}></div>
                        
                    <div className="flex flex-row gap-4 items-center">
                        <div className={`bg-white/10 h-4 rounded ${props.isnew ? "w-[25%]" : "w-[40%]"} `}> </div>
                        <span className="text-white/10"> • </span>
                        <div className={`bg-white/10 h-4 rounded ${props.isnew ? "w-[25%]" : "w-[50%]"} `}> </div>
                    </div>
                </div>
            </div>
        
    )
}

export default CollectionCardSkeleton;
