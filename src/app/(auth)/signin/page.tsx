
import { ArrowLeft } from "lucide-react";
//         <Link href={`/posts/${post.id}`}>{post.title}</Link>
import Link from "next/link";
import ActionButton from "@/src/components/ui/button";

const SignIn=()=>{

    return(
        <div>
            <div>
                <ArrowLeft color="#C7CDD4"/>
            </div>
            <h1>WELCOME BACK</h1>
            <p>Sign in to your account, save your favorite cases and sync your bookmarks</p>
            <form >
                <input type="text" name="email" placeholder="Email address"/>
                <input type="text" placeholder="Password"/>
                <Link href="/auth-signIn/forgotPassword">Forgot Password????</Link>
                <button type="submit">Sign in</button>
                <ActionButton impact="boldLarge" message="Sign in"/>
            </form>
            <div>
                <p>{"Don't have an account"}</p>
                <Link href="/signup">Register</Link>
            </div>
            
        </div>
    )
}


export default SignIn;
