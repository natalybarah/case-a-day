

import CaseCardLight from "@/src/components/case-card-light";
import { auth } from "@/src/auth";
import PartialLibrary from "../../../components/partial-library";
import EmptyLibrary from "@/src/components/empty-library";
import { sql } from "@/src/lib/neondb";
import { Fragment } from "react/jsx-runtime";
import { CaseCardLightSkeleton } from "@/src/components/case-card-light";
import CaseCard from "@/src/components/case-card";

const Library = async ()=> {

    const session= await auth();
    const sessionId= session?.user?.id;
    const docket= await sql`SELECT 
                                    cases.id AS caseIdentity,
                                    title, 
                                    court,
                                    year,
                                    slug,
                                    image,
                                    image_alt_text,
                                    bookmarks.case_id AS bookmark_case_identity
                                FROM 
                                    cases
                                INNER JOIN bookmarks
                                    ON cases.id = bookmarks.case_id
                                WHERE user_id = ${sessionId}`
    console.log(docket, "DOCKET")

    return(
        <div className=" flex flex-col bg-library h-full pt-4 p-4 gap-7.5">
            <h1 className="font-black font-fraunces text-text-brand-emphasis text-[40px]">Your docket</h1>
            <div className=" flex flex-col gap-2.5">
               {docket.map(caseItem => 
                    <CaseCardLight key={caseItem.caseidentity} {...caseItem}  />
               )}
            </div>
            <div className="flex flex-col items-center justify-center m-auto translate-y-[-54px]">

            { docket.length === 0  ? <EmptyLibrary  /> : docket.length < 3  ?  <PartialLibrary/> : null}
            </div>
        </div>
       
        
    )
}

export default Library;
/*exigir un reload! despues de que estoy en libreria, doy click a un caso, luego lo desbookmark y luego voy atras a library, el caso sigue apareciendo, 
forzar load aqui */
//es menor que 3 