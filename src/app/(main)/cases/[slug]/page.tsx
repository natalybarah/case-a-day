import CaseImage from "@/src/components/case-image";
import CaseActions from "@/src/components/case-actions";
import Content from "@/src/components/content";
import {sql} from '../../../../lib/neondb'
import NotFound from "../../../not-found"
import { ErrorState} from "@/src/components/error-state";

//aqui debo saber que renderizar, tal vez atraves de un prop? o atraves del URL
//o tal vez hago un fetch dependiendo de un prop con el url del caso y hacer el fetch? si slug === xxx, fetch case


//probemos usar pathname y renderizar de acuerdo a path name
//debo extraer el case especifico con el slug 



export default async function  Cases({
    params,
  }: { 
    params: Promise<{slug:string}>
  }) {
   

      const {slug}=await params;
      const fakeSlug='love'
      const result = await sql`SELECT * FROM cases WHERE slug = ${slug}`;
      //si no hay un resultado, quiero que haya un expected error del servidor, producto de un async await. 
      //error tipo failed to load from database

    if(!result || result.length === 0){
      return <NotFound/>
    }
     //DEBO agregar error en caso de que el user typee un caso que no existe, case resource doesn't exist

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