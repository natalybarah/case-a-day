import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
//import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import Resend from "next-auth/providers/resend";

const pool = new Pool({connectionString: process.env.DATABASE_URL})


export const {handlers, auth, signIn, signOut } = NextAuth(
    {
        adapter: NeonAdapter(pool),
        providers: [
        
            Google({
                clientId: process.env.GOOGLE_CLIENT_ID || "",
                clientSecret: process.env.GOOGLE_SECRET_ID || ""
            }),

            LinkedIn({
                clientId: process.env.LINKEDIN_ID,
                clientSecret: process.env.LINKEDIN_SECRET
            }),

            Resend({
                apiKey: process.env.AUTH_RESEND_KEY,
                from: "onboarding@resend.dev"
            })
    
        ]
    })


