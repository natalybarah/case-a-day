
import Link from "next/link";
import UserInput from "@/src/components/ui/user-input";
import ActionButton from "@/src/components/ui/button";
import { ArrowLeft, Mail, LockKeyhole, User } from "lucide-react";

const SignUp= ()=>{

    return(
            <div className="flex flex-col bg-neutral-tertiary h-dvh p-4  items-center justify-center gap-8 relative ">
                    <Link href="/signin" className="self-start top-6 absolute">
                        <ArrowLeft color="#C7CDD4"/>
                    </Link>
                    <div className="flex flex-col p-4  gap-8 justify-center items-center">
                        <h1 className=" font-bold text-[30px] text-text-on-brand text-center">CREATE ACCOUNT</h1>
                        <p className="font-semibold text-text-neutral-secondary text-center">Start saving your cases and sync your bookmarks</p>
                        <form className="flex flex-col gap-3 w-full">
                            <UserInput placeholder="Full name" name="name" inputType="text" icon={User}/>
                            <UserInput placeholder="Email" name="email" inputType="text" icon={Mail} />
                            <UserInput placeholder="Password" name="password" inputType="password" icon={LockKeyhole}/>
                            <UserInput placeholder="Confirm password" name="confirmPassword" inputType="password" icon={LockKeyhole}/>
                            <ActionButton impact="boldLarge" message="Create an account"/>
                        </form>
                        <div className="text-center">
                            <p className="text-text-neutral-secondary font-medium text-[16px]">{"Already have an account?"}</p>
                            <Link className="text-text-brand-accent font-semibold text-[16px]" href="/signin">Sign in</Link>
                        </div>
                       {/* <div className="flex flex-row gap-10">
                            <button><Image src={FacebookIcon} width={44} height={44} alt="facebook icon"/></button> 
                            <button><Image src={GoogleIcon} width={44} height={44} alt="google icon"/></button> 
                            <button><Image src={LinkedinIcon} width={44} height={44} alt="linkedin icon"/></button> 
                        </div>*/}
                          
                    </div>
                </div>
    )
}

export default SignUp;