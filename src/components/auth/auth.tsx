import { signIn, signOut } from "@/src/auth";

export function SignIn({provider}: {provider?: string}){
    return(
        <form
            action={async ()=>{
                "use server"
                await signIn(provider)
            }}
        >

            <button type="submit">SIGN IN WITH GOOGLE</button>
        </form>


    )
}