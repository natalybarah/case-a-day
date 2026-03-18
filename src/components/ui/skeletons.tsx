

export const TodayCaseSkeleton= (props: ContentProps)=> {
    return(
        <div className=" flex flex-col gap-4 bg-neutral-primary text-text-neutral-primary px-[23.5] pt-6 rounded-t-[40] relative pb-10" >
            <div className="flex  justify-center items-center self-center align-center bg-white/20 w-[85] h-[30]  rounded-4xl 
         absolute -top-[15px] left-1/2 -translate-x-1/2">
                <span className="font-semibold text-[13]">  
                   today
                </span>
            </div>
            <div className="flex flex-col gap-2 case-caption text-text-neutral-secondary ">
                <h2 className="text-3xl text-text-on-brand font-fraunces font-bold">{props.title}</h2>
                <div className="flex text-sm gap-2  italic">
                    <span>{props.year},</span>
                    
                    <span>{props.court}</span>
                </div>
                <h3 className="text-text-brand-emphasis font-semibold italic text-center">{props.quote}</h3>
            </div>
            <div>
                <p className="font-light">
                  {props.content}
                </p>
            </div>
        </div>
    )

}
