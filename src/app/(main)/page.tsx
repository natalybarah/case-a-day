//import Image from "next/image";
//import { sql } from "../../lib/neondb";
import Content from "../../components/content";
import CaseActions from "../../components/case-actions";
import CaseImage from "../../components/case-image";
import { sql } from "@/src/lib/neondb";
import { notFound } from "next/navigation";




export default async function TodayCase({
  params,
}: {
  params: Promise<{slug: string}>
}) {

  //const {slug}= await params;
const slugg= 'guideon-v-wainwright'
// await createCollection();
/*
async function getCollections(){
   const collection = sql`SELECT * FROM collections`
  return collection 
}

const response= await getCollections();
//console.log(response)*/

  const result = await sql`SELECT * FROM cases WHERE slug = ${slugg}`;
  /*if(!result || result===undefined){
     notFound()
  }*/
  const {quote, content, year, title, court, image, image_alt_text, published_at}= result[0];



  return (

    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage  image={image} image_alt_text={image_alt_text} />
        <CaseActions  />
        
      </div>
      <div>

      </div>
    
      <div className="-mt-8">
          <Content content={content} year={year} title={title} court={court} quote={quote} published_at={published_at} />
      </div>
    </div>

  )
};