
import CaseCardLight from "@/src/components/case-card";
import PartialLibrary from "../../components/partial-library";
import EmptyLibrary from "@/src/components/empty-library";

const Library = ()=> {
    return(
        <div className=" flex flex-col bg-library h-dvh pt-4 p-4 gap-7.5">
            <h1 className="font-black font-fraunces text-text-brand-emphasis text-[40px]">Your docket</h1>
         <div className=" flex flex-col gap-2.5">
                <CaseCardLight/>
                <CaseCardLight/>
                <CaseCardLight/>
                
            </div>*
            <div className="flex flex-col items-center justify-center m-auto translate-y-[-54px]">

                
             <PartialLibrary/> 
              {/*   <EmptyLibrary  />*/}

            </div>
        </div>
       
        
    )
}

export default Library;
