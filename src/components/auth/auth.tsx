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


export function SignInWithEmail({children, className}:{ children?: React.ReactNode, className: string} ){
    return(
        <form className={className} action={ async(formData)=>{
            "use server"
            await signIn("resend", formData)
        }}>
            {children}

        </form>
    )
}