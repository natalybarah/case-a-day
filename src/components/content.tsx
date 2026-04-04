

type ContentProps={
    title?: string,
    court?: string,
    year?: number,
    quote?: string,
    content?: string,
    published_at?: string,
    path: string
}

const Content= (props: ContentProps)=>{
        
        const options={
            month: "long",
            day: "numeric",
            year: "numeric"
        }

        const event= props.published_at?.toLocaleDateString("en-US", options)
       
   
    return(
        <div className=" flex flex-col gap-4 bg-neutral-primary text-text-neutral-primary px-[23.5] pt-6 rounded-t-[40px] relative pb-10" >
            <div className="flex  justify-center items-center self-center align-center bg-brand-surface  h-[30] p-4  rounded-full
         absolute -top-[15px] left-1/2 -translate-x-1/2 ">
                <span className="font-medium text-[13]">  
                 {props.path === "subcase" ? event : "Today"}
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
                <div >
                  {props.content?.split('\n').map((paragraph, index)=>(
                    <p key={index} className="font-light mt-3">{paragraph}</p>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default Content;

