import { signIn, signOut } from "@/src/auth";

export function SignIn({provider, children}: {provider?: string, children?: React.ReactNode}){
    return(
        <form
            action={async ()=>{
                "use server"
                await signIn(provider)
            }}
        >

            <button type="submit">{children}</button>
        </form>


    )
}
