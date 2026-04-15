import ToastNotification from '@/src/components/modals/toast-saved';
import {sql} from '../../../../lib/neondb'
import NotFound from "../../../not-found"
import { CaseItem } from "../../discover/[slug]/page";
import CaseView from "@/src/components/case-view";
import BackButton from '@/src/components/ui/back-button';
import { handleBookmarkAction } from '@/src/lib/actions';

export default async function  Cases({
    params, searchParams
  }: { 
    params: Promise<{slug:string}>, searchParams: Promise<{[key: string]: string | undefined}>
  }) {
   
      const {slug}=await params;
      const {from}= await searchParams;
      const result = await sql`SELECT * FROM cases WHERE slug = ${slug}`;

      if(!result || result.length === 0){
        return <NotFound/>
      }
     
      const caseData= result[0] as CaseItem;

    return ( 
    <div className='relative'>
        {from === 'signin' && <ToastNotification caseId={caseData.id}/> }
        <BackButton className='absolute top-5 left-4 z-50'/>
        <CaseView {...caseData} path="subcase" /> 
    </div>
      
  )

};
   
