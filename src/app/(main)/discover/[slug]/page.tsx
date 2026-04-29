import { sql } from "@/src/lib/neondb"
import CollectionUI from "./collection-ui"
import {  ReactElement } from "react"

export type CollectionProps={
    title: string,
    summary: string,
    image: string,
    id: string
}

export  type CollectionUIProps={
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
 const delay = (ms: number)=> new Promise((resolve, reject)=> resolve(setTimeout(()=> {}, ms)))
    

export default async function  ServerCollection ({params}: {params: Promise<{slug:string}>}): Promise<ReactElement>{

    const {slug}= await params;

    const result= await sql`SELECT * FROM collections WHERE slug = ${slug}`; 
    const collection= result[0] as CollectionProps;
    console.log(collection, "collection")
    const cases= await sql`SELECT * FROM cases WHERE collection_id = ${collection.id}` as CaseItem[]
    await delay(5000)
    return  <CollectionUI collection={collection} cases={cases}/>
}



