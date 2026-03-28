'use server'
import { sql } from "./neondb"

   export  async function handleAddLikeAction(id: string , newLikesCount: number){
            
            const newLikes= await sql`UPDATE cases SET likes = ${newLikesCount} WHERE id= ${id} `
            console.log(newLikes, "NEW LIKES BABY SERVER ACTION")   
    }

    export async function handleBookmarkAction(session, case_id){
        const userId= session.user.id
        //session.user.id 
        const newBookmarkForUser= await sql`INSERT INTO bookmarks(user_id, case_id) VALUES (${userId}, ${case_id})`
        console.log(newBookmarkForUser)
    }
