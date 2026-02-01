import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
//import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
//import LinkedIn from "next-auth/providers/linkedin";


const pool = new Pool({connectionString: process.env.DATABASE_URL})


export const {handlers, auth, signIn, signOut } = NextAuth(
    {
        adapter: NeonAdapter(pool),
        providers: [
        
            Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_SECRET_ID || ""
        }),

    
        
        ]
    })


