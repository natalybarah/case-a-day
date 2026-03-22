'use client'
import { useEffect } from "react";
import { ErrorState } from "@/src/components/error-state";
import ActionButton from "@/src/components/ui/button";
import Link from "next/link";
import { ButtonProps } from "@/src/components/ui/button";
import { usePathname } from "next/navigation";


export default function ErrorTemplate({
    error,
    reset, 
    variant, 
    impact
    }: {error?: Error & {digest ?: string}
        reset?: ()=> void
        variant: string
        impact: ButtonProps['impact']

    }){
        useEffect(()=>{
            console.log(error, "ERROR")
        }, [error])

    const pathName= usePathname();

    const content={
        auth: {
            primaryText: "We couldn't reach the login service", 
            secondaryText: "It looks like there's a temporary issue connecting to the server.",
            tertiaryText:"Please try again to continue your session",
            buttonMessage: "Try again",
            imageUrl: "/images/auth-failed.png"
        },
        main: {
            primaryText: "Service connection interrupted", 
            secondaryText: "A temporary issue is preventing us from loading this section",
            tertiaryText:"Your progress is safe—please try again",
            buttonMessage: "Try again",
            imageUrl: "/images/server-down.png"
            
        },
        notFound: {
            primaryText: "Resource not found",
            secondaryText: "The case or page you are looking for doesn't exist or has been moved.",
            tertiaryText: "Please check the URL or return to the library.",
            buttonMessage: "Back to your docket",
            imageUrl: "/images/not-found.png",
            href: "/library"
        }
    }
    const activeContent= content[variant];

    return( 
            <ErrorState 
                primaryText={activeContent.primaryText} 
                secondaryText={activeContent.secondaryText} 
                tertiaryText={activeContent.tertiaryText}
                imageUrl= {activeContent.imageUrl}
            >
                { activeContent.href ? 
                <Link href={activeContent.href}>
                    <ActionButton   
                        message={activeContent.buttonMessage}
                        impact={impact}
                    />
                </Link>
                : 
                <ActionButton   
                    message={activeContent.buttonMessage}
                    impact={impact}
                    onClick={()=> reset?.()}
                />
                }
            </ErrorState>
    )
}
