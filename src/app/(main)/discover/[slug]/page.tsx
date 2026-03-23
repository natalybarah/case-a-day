import { sql } from "@/src/lib/neondb"
import CollectionUI from "./collection-ui"


const ServerCollection= async ({params}: {params: Promise<{slug:string}>})=>{

    const {slug}= await params;

    const result= await sql`SELECT * FROM collections WHERE slug = ${slug}`; 
    const collection= result[0];
    console.log(collection, "collection")

    return  <CollectionUI collection={collection}/>
}

export default ServerCollection;