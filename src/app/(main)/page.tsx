//import Image from "next/image";
//import { sql } from "../../lib/neondb";
import Content from "../../components/content";
import CaseActions from "../../components/case-actions";
import CaseImage from "../../components/case-image";

export default async function TodayCase() {

// await createCollection();
/*
async function getCollections(){
   const collection = sql`SELECT * FROM collections`
  return collection 
}

const response= await getCollections();
//console.log(response)*/

  return (

    <div  >
      <div className="  sticky top-0 h-[350px]   w-full">
        <CaseImage  />
        <CaseActions />
        
      </div>
      <div>

      </div>
    
      <div className="-mt-8">
          <Content  />
      </div>
    </div>

  )
};