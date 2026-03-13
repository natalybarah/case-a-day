'use client'
import { useEffect, startTransition } from "react";
import { ErrorState } from "@/src/components/error-state";
import ActionButton from "@/src/components/ui/button";
export default function ErrorPage({
    error,
    reset
}: {error: Error & {digest ?: string}
    reset: ()=> void
}){
    useEffect(()=>{
        console.log(error)
    }, [error])

    return(
        <ErrorState primaryText="Something went wrong with database!" secondaryText="try again later">
            <ActionButton   message="Reset" 
                            impact="boldLarge" 
                           onClick={()=> reset()}
            />
        </ErrorState>
    )
}
