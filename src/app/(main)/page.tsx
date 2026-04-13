import { sql } from "@/src/lib/neondb";
import { notFound } from "next/navigation";
import CaseView from "@/src/components/case-view";
import { CaseItem } from "./discover/[slug]/page";
import ToastNotification from "@/src/components/modals/toast-saved";
import { handleBookmarkAction } from "@/src/lib/actions";

import { auth } from "@/src/auth";


export default async function TodayCase({
  searchParams,
}: {searchParams: Promise<{[key: string]: string | undefined}>
  }) {
  const {from} = await searchParams;
  const session= await auth();
  const sessionId= session?.user?.id;
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
  console.log("SESSION ID FROM TODAY CASE", sessionId)
  console.log("FROM", from)

  if(from==="signin"){
    handleBookmarkAction(caseData.id, true)
  }

  return( 
    <>
      {from === "signin" ? <ToastNotification/> : null}
      <CaseView {...caseData} path="another"  />
    </>
  )

};
