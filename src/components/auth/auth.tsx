import { signIn, signOut } from "@/src/auth";
import { auth } from "@/src/auth";
/*
tal vex aqui introducir una accion... 
donde cuando hace sign in viene y lo redirect 

*/
export function SignIn({provider, children}: {provider?: string, children?: React.ReactNode}){
  /* 
    const onSubmitHandler = ()=> {
        const session= auth();
        const sessionId= session?.user?.id
            if(sessionId){

            }
     
    }
*/
    return(
        <form
            action={async ()=>{
                "use server"
                await signIn(provider, {redirectTo: "/"})
            }}
        >
            {<button  /*onSubmit={onSubmitHandler}*/ type="submit">{children}</button>}
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