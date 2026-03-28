'use server'
import { sql } from "./neondb"

   export  async function handleAddLikeAction(id: string , newLikesCount: number){
            
            const newLikes= await sql`UPDATE cases SET likes = ${newLikesCount} WHERE id= ${id} `
            console.log(newLikes, "NEW LIKES BABY SERVER ACTION")
}

