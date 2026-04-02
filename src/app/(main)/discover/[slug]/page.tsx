import { sql } from "@/src/lib/neondb"
import CollectionUI from "./collection-ui"

export type CollectionProps={
    title: string,
    summary: string,
    image: string,
    id: string
}

export type CollectionUIProps={
    collection: CollectionProps,
    cases: CaseItem[]

}

export type CaseItem={
    id?: string,
    title?: string,
    slug?: string,
    quote?: string,
    year?: number,
    court?: string,
    content?: string,
    published_at?: string,
    likes?: number,
    image?: string;        
    image_alt_text?: string;
    chips?: string[],
}

const ServerCollection= async ({params}: {params: Promise<{slug:string}>})=>{

    const {slug}= await params;

    const result= await sql`SELECT * FROM collections WHERE slug = ${slug}`; 
    const collection= result[0] as CollectionProps;
    console.log(collection, "collection")
    const cases= await sql`SELECT * FROM cases WHERE collection_id = ${collection.id}` as CaseItem[]

    return  <CollectionUI collection={collection} cases={cases}/>
}

export default ServerCollection;