import Link from "next/link"
import ActionButton from "../ui/button"

const SignInModal=()=>{
    return(
        <div className="flex flex-col bg-neutral-tertiary top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute max-w-[320px] 
        p-6 justify-center items-center gap-4 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.45)]
           backdrop-grayscale ">
            <div className="text-center">
                <h1 className="font-fraunces font-regular text-[18px] text-text-brand-emphasis">SIGN IN TO SAVE CASES</h1>
                <p className="font-semibold text-[#C7CDD4] text-[16px]">Create an account or sign in to keep your bookmarks across devices</p>
            </div>
            <Link href="/signin">
                <ActionButton message="Sign in"/>
            </Link>

        </div>
    )
}

export default SignInModal