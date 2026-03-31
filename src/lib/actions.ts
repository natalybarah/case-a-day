'use server'
import { sql } from "./neondb";
import { auth } from "../auth";


   export  async function handleAddLikeAction(id: string , newLikesCount: number){
            
            const newLikes= await sql`UPDATE cases SET likes = ${newLikesCount} WHERE id= ${id} `
            console.log(newLikes, "NEW LIKES BABY SERVER ACTION")   
    }

    export async function handleBookmarkAction(case_id: string, bookmarkNewValue: boolean){
        const session= await auth();
        const userId= session?.user?.id
        if(!session?.user?.id){
            throw new Error("Unauthorized: you must be logged in your account to bookmark a case")
        } 
        if(bookmarkNewValue){
            try{
                const newBookmarkForUser= await sql`INSERT INTO bookmarks(user_id, case_id) VALUES (${userId}, ${case_id}) ON CONFLICT (user_id, case_id) DO NOTHING`
                return { success: true}
            } catch(error){
                console.log(error, "Database error saving bookmark")
                return {sucess: false, error: "Failed to save bookmark"}
            }
        } else {
            try {
                await sql`DELETE FROM bookmarks WHERE user_id = ${userId} AND case_id = ${case_id}`
                return {sucess: true}
            } catch(error){
                console.log('there was an error deleting this bookmark fron your docket', error)
                return {sucess: false, error: "Failed to delete bookmark"}
            }
        }
    }
