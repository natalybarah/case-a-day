import { sql } from "@/src/lib/neondb";
import { notFound } from "next/navigation";
import CaseView from "@/src/components/case-view";
import { CaseItem } from "./discover/[slug]/page";
//import { TodayCaseSkeleton } from "@/src/components/ui/skeletons";


export default async function TodayCase(){
  const totalCases= 5;
  const now= new Date();
  const thisYear= now.getFullYear();
  const elapsedTimestamp= now.getTime() - new Date(thisYear,0,0).getTime();
  const msPerDay= 1000 * 60 * 60 * 24;
  const elapsedDays= elapsedTimestamp / msPerDay;
  const elapsedDaysWholeNumber= Math.floor(elapsedDays);
  console.log(elapsedDaysWholeNumber)
  const caseIndex= elapsedDaysWholeNumber % totalCases;
  const result = await sql`SELECT * FROM cases ORDER BY id ASC LIMIT 1 OFFSET ${caseIndex}`
  

  if(!result || result.length === 0 ){
     notFound()
  }
  const caseData= result[0] as CaseItem;

  return <CaseView {...caseData} />
  
};

/* 
   <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage  image={image} image_alt_text={image_alt_text} />
        <CaseActions id={id} likes={likes} sessionId={sessionId} />
      </div>
      <div className="-mt-8">
          <Content content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div>
*/


