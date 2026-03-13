import "./globals.css"
import type { Metadata } from 'next';
import { Inter, Fraunces } from "next/font/google";
import "@/src/components/ui/button"



const inter= Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const fraunces= Fraunces({
 variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist',
}
export default function NotFound(){
    return <ErrorState/>
}/*
export default  function NotFound(){

   

    return(
        <html lang='en' className={` ${inter.variable} ${fraunces.variable}`}>
            <body className='h-screen w-screen grid place-items-center text-center' style={{backgroundColor: 'var(--color-neutral-primary)'}}>
                <div  className="flex flex-col gap-6">

                <h1 className="font-extrabold text-xl text-text-on-brand">404 - Oops, Page Not Found LOCAL BUT GLOBAL</h1>
                <p className='font-medium text-lg text-text-on-brand'>This page does not exist</p>
              
                </div>
            </body>
        </html>
    )
}*/