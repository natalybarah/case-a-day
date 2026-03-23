
import CollectionCard from "../../../components/collection-card";
import AttorneyCard from "../../../components/attorney-card";
import ActionButton from "../../../components/ui/button";
import { sql } from "@/src/lib/neondb";

const Discover= async ()=>{

    const collections= await sql`SELECT *  FROM collections WHERE is_featured = true ORDER BY created_at ASC`;
console.log(collections, 'result of collections')

//h-[calc(100dvh-54px)] alternate hight solution

    return(
      

        <div className="bg-linear-[180deg,#0B1020_0%,#121733_100%] min-h-screen flex flex-col gap-3 p-4 xs:pt-4 pt-2 pb-20">
                    <div className="pb-4 ">
                        <div className="pb-0">
                            <h1 className="font-fraunces font-black text-[40px] text-text-brand-emphasis xs:mb-2.5 ">Discover</h1>
                            <h2 className="font-semibold font-fraunces text-[18px] text-text-brand-emphasis mb-1">Collections</h2>
                        </div> 
                        <div className="flex flex-row flex-wrap pt-2  gap-4  justify-center ">
                            {collections.map((collection, index)=>(
                                <CollectionCard slug={collection.slug} key={index} title={collection.title} chips={collection.chips} isnew={collection.isnew} image={collection.image}/>
                            ))}
                        </div>
                        <div className="flex flex-col xs:gap-6 gap-2">
                            <h2 className="font-semibold font-fraunces text-[18px]  text-text-brand-emphasis pt-2  ">Attorneys</h2>
                        
                            <div  className="flex flex-row gap-2.5 overflow-x-auto no-scrollbar" >
                                    <AttorneyCard/>
                                    <AttorneyCard/>
                                    <AttorneyCard/>
                            </div>
                            <div className="self-end pt-2">
                                <ActionButton impact="bold" message={"Explore all"} />
                            </div>
                        </div>
                    </div>
            </div>
        
     ) 
       
    
}
export default Discover;


/*
algo como

<Link to= discover/collection>
   <CollectionCard key={index} title={collection.title} chips={collection.chips} isnew={collection.isnew} image={collection.image}>
        <Collection title={collection.title} chips={collection.chips} isnew={collection.isnew} image={collection.image}/>
   </CollectionCard>

</Link>

*/