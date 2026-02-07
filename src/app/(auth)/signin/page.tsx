
import { ArrowLeft, Mail } from "lucide-react";
//         <Link href={`/posts/${post.id}`}>{post.title}</Link>
import Link from "next/link";
import ActionButton from "@/src/components/ui/button";
import FacebookIcon from "@/src/assets/facebook-icon.svg";
import LinkedinIcon from "@/src/assets/linkedin-icon.svg";
import GoogleIcon from "@/src/assets/google-icon.svg";
import Image from "next/image";
import UserInput from "@/src/components/ui/user-input";
import { SignIn, SignInWithEmail } from "@/src/components/auth/auth";
import ButtonContainer from "@/src/components/ui/button-container";

const SignInUser=()=>{

    return(
        
        <div className="flex flex-col bg-neutral-tertiary h-dvh p-4   items-center justify-center gap-8  relative ">
            <Link href="/" className="self-start top-6 absolute">
                <ArrowLeft color="#C7CDD4"/>
            </Link>
            <div className="flex flex-col p-4  xs:gap-8 gap-3 justify-center items-center">
                <div className="gap-2 text-center mb-6">
                    <h1 className=" font-extrabold xs:text-[30px] text-[30px]/8 text-text-on-brand ">Save your favorite cases</h1>
                    <h2 className=" font-bold text-[20px] text-text-neutral-secondary">Log into your Case a day account</h2>
                </div>
                <div className="w-full flex flex-row items-center">
                    <div className="border-t-text-neutral-secondary border-t w-full"></div>
                        <p className="font-semibold text-text-neutral-secondary text-center  w-full">Log in with</p>
                    <div className="border-t-text-neutral-secondary border-t w-full"></div>
                </div>
                <div className="flex flex-row gap-5">

                    <SignIn>
                        <ButtonContainer message="Facebook">
                            <Image src={FacebookIcon} width={44} height={44} alt="facebook icon"/>
                        </ButtonContainer>
                    </SignIn> 
                    
                    <SignIn provider="google">
                        <ButtonContainer message="Google">
                            <Image src={GoogleIcon} width={44} height={44} alt="google icon"/>
                        </ButtonContainer>
                    </SignIn>
                    
                    
                    <SignIn provider="linkedin">
                        
                        <ButtonContainer message="LinkedIn">
                            <Image src={LinkedinIcon} width={44} height={44} alt="linkedin icon"/>
                        </ButtonContainer>
                    
                    </SignIn> 
                </div>
               <div className="w-full flex flex-row items-center">
                    <div className="border-t-text-neutral-secondary border-t w-full"></div>
                        <p className="font-semibold text-text-neutral-secondary text-center text-nowrap p-4  w-full">or continue with</p>
                    <div className="border-t-text-neutral-secondary border-t w-full"></div>
                </div>
                <SignInWithEmail className="flex flex-col gap-6 w-full">
                    <UserInput placeholder="Email" name="email" inputType="text" icon={Mail} />
                   
                 <ActionButton impact="boldLarge" message="Continue"/>
                 </SignInWithEmail>
                  
                <div className="text-center ">
                    <p className="text-text-neutral-secondary font-medium text-[11px]  ">
                        By continuing, you acknowledge that you understand and agree to the Terms & Conditions and Privacy Policy
                    </p>
                  {/*  <Link className="text-text-brand-accent font-semibold text-[16px]" href="/signup">Register</Link>*/}
                </div>
            </div>
               
                
        </div>
      
    )
}


export default SignInUser;
