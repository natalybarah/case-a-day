import CollectionCardSkeleton from "@/src/components/collection-card-skeleton"
import AttorneyCardSkeleton from "@/src/components/attorney-card-skeleton"
import ActionButton from "@/src/components/ui/button";

export default function Loading(){

    const collectionSkeletons= Array.from({length:3})
    const attorneySkeletons=  Array.from({length: 3})

return(
          

        <div className="bg-linear-[180deg,#0B1020_0%,#121733_100%] min-h-screen flex flex-col gap-3 p-4 xs:pt-4 pt-2 pb-20">
                    <div className="pb-4 ">
                        <div className="pb-0">
                            <h1 className="font-fraunces font-black text-[40px] text-text-brand-emphasis xs:mb-2.5 ">Discover</h1>
                            <h2 className="font-semibold font-fraunces text-[18px] text-text-brand-emphasis mb-1">Collections</h2>
                        </div> 
                        <div className="flex flex-row flex-wrap pt-2  gap-4  justify-center ">
                            {collectionSkeletons.map((collection, index)=>(
                                <CollectionCardSkeleton key={index} isnew={index === 0} />
                            ))}
                        </div>
                        <div className="flex flex-col xs:gap-6 gap-2">
                            <h2 className="font-semibold font-fraunces text-[18px]  text-text-brand-emphasis pt-2  ">Attorneys</h2>
                        
                            <div  className="flex flex-row gap-2.5 overflow-x-auto no-scrollbar" >
                                {attorneySkeletons.map((attorney, index)=>(
                                            <AttorneyCardSkeleton key={index}/>
                                ))}
                            </div>
                            <div className="self-end pt-2">
                                <ActionButton impact="bold" message={"Explore all"} />
                            </div>
                        </div>
                    </div>
            </div>
)
}

