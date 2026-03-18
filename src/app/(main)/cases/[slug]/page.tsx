import CaseImage from "@/src/components/case-image";
import CaseActions from "@/src/components/case-actions";
import Content from "@/src/components/content";
import {sql} from '../../../../lib/neondb'
import NotFound from "../../../not-found"


export default async function  Cases({
    params,
  }: { 
    params: Promise<{slug:string}>
  }) {
   

      const {slug}=await params;
      const fakeSlug='love'
      const result = await sql`SELECT * FROM cases WHERE slug = ${slug}`;
    
    if(!result || result.length === 0){
      return <NotFound/>
    }


      const {quote, content, year, title, court, image, image_alt_text, published_at}= result[0];

// await createCollection();
/*
async function getCollections(){
   const collection = sql`SELECT * FROM collections`
  return collection 
}
  

const response= await getCollections();
//console.log(response)*/
    if(!result){
      return 'there was an error'
    }


  return (

    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage image={image} image_alt_text={image_alt_text}/>
        <CaseActions />

      </div>
      <div>
<FakeComponent/>
      </div>
    
      <div className="-mt-8">
          <Content content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div>

  )
};
//here i put fakecomponent to test error