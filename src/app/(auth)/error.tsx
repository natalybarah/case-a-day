'use client'
import ErrorTemplate from "@/src/components/error-template"


export default function ErrorPage({error, reset}: {
    error: Error & {digest?: string}
    reset: ()=> void
}) {
    return <ErrorTemplate error={error} reset={reset} variant="auth" impact="boldLarge"/>
    
}