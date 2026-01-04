
import CollectionCard from "../../components/collection-card";
import AttorneyCard from "../../components/attorney-card";
import ActionButton from "../../components/ui/button";


const Discover= ()=>{

    const isNew= true;
    return(
        <div className="bg-linear-[180deg,#0B1020_0%,#121733_100%] h-[calc(100dvh-54px)]  flex flex-col gap-3 p-4 xs:pt-4 pt-2 ">
            <div className="pb-4 ">
                <div className="pb-0">
                    <h1 className="font-fraunces font-black text-[40px] text-text-brand-emphasis xs:mb-2.5 ">Discover</h1>
                    <h2 className="font-semibold font-fraunces text-[18px] text-text-brand-emphasis ">Collections</h2>
                </div> 
                <div className="flex flex-row flex-wrap pt-0  gap-4  justify-center ">
                    <CollectionCard isNew={isNew}/>
                    <CollectionCard/>
                    <CollectionCard/>
                </div>
                <div className="flex flex-col xs:gap-6 gap-3">
                    <h2 className="font-semibold font-fraunces text-[18px]  text-text-brand-emphasis  ">Attorneys</h2>
                
                    <div  className="flex flex-row gap-2.5 overflow-x-auto no-scrollbar" >
                            <AttorneyCard/>
                            <AttorneyCard/>
                            <AttorneyCard/>
                    </div>
                    <div className="self-end ">
                        <ActionButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discover;
//collection card div gap 4 and gap 3
//attorneys    xs:mb-6  mb-3