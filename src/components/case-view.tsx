import CaseImage from "./case-image";
import CaseActions from "./case-actions";
import Content from "./content";
import { CaseItem } from "../app/(main)/discover/[slug]/page";
import { auth } from "../auth";
import { sql } from "../lib/neondb";

const CaseView= async ({
    image,
    image_alt_text,
    id,
    likes,
    content, 
    year,
    title,
    court,
    quote,
    published_at
}: CaseItem)=>{


      const session= await auth();
      const sessionId= session?.user?.id;
      let isBookmarked= false;

      if(sessionId){
          const savedCaseResult= await sql`SELECT 1 FROM bookmarks WHERE user_id = ${sessionId} and case_id = ${id}`
          isBookmarked= savedCaseResult.length > 0;
      }
    
    return(
    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage  image={image} image_alt_text={image_alt_text} />
        <CaseActions id={id} likes={likes} sessionId={sessionId} isBookmarked={isBookmarked}/>
      </div>
      <div className="-mt-8">
          <Content content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div>
    )
}

export default CaseView;