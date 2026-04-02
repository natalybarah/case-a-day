import {sql} from '../../../../lib/neondb'
import NotFound from "../../../not-found"
import { CaseItem } from "../../discover/[slug]/page";
import CaseView from "@/src/components/case-view";
import BackButton from '@/src/components/ui/back-button';

export default async function  Cases({
    params,
  }: { 
    params: Promise<{slug:string}>
  }) {
   
      const {slug}=await params;
      const result = await sql`SELECT * FROM cases WHERE slug = ${slug}`;
  
      if(!result || result.length === 0){
        return <NotFound/>
      }
     
      const caseData= result[0] as CaseItem;

  
  return ( 
  <div className='relative'>
      <BackButton className='absolute top-5 left-4 z-50'/>
      <CaseView {...caseData} path="subcase" /> 
  </div>
    
  )

};
   
    
  /*    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage image={image} image_alt_text={image_alt_text}/>
        <CaseActions likes={likes} id={id} sessionId={sessionId} isBookmarked={isBookmarked}/>

      </div>
      <div>

      </div>
    
      <div className="-mt-8">
          <Content content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div> */