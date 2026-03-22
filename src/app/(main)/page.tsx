//import Image from "next/image";
//import { sql } from "../../lib/neondb";
import Content from "../../components/content";
import CaseActions from "../../components/case-actions";
import CaseImage from "../../components/case-image";
import { sql } from "@/src/lib/neondb";
import { notFound } from "next/navigation";

import { TodayCaseSkeleton } from "@/src/components/ui/skeletons";


export default async function TodayCase(){


  //const {slug}= await params;

// await createCollection();
/*
async function getCollections(){
   const collection = sql`SELECT * FROM collections`
  return collection 
}

const response= await getCollections();
//console.log(response)*/

  const totalCases= 2;
  const now= new Date();
  const thisYear= now.getFullYear();
  const elapsedTimestamp= now.getTime() - new Date(thisYear,0,0).getTime();
  const msPerDay= 1000 * 60 * 60 * 24;
  const elapsedDays= elapsedTimestamp / msPerDay;
  const elapsedDaysWholeNumber= Math.floor(elapsedDays);
  console.log(elapsedDaysWholeNumber)
  const caseIndex= elapsedDaysWholeNumber % totalCases;

  

  const result = await sql`SELECT * FROM cases ORDER BY id ASC LIMIT 1 OFFSET ${caseIndex}`

  console.log(caseIndex, "caseIndex")

  if(!result || result.length === 0 ){
     notFound()
  }
  const {quote, content, year, title, court, image, image_alt_text, published_at}= result[caseIndex];




  return (
    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage  image={image} image_alt_text={image_alt_text} />
        <CaseActions  />
      </div>
      <div className="-mt-8">
          <TodayCaseSkeleton content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div>
  )
};




