
import Image from "next/image"
import RollImage from "../../public/images/roll.png"

export const ErrorStateCopy= (): React.ReactNode=>{
    return(
    <div>
        <div className='h-screen w-screen grid place-items-center text-center bg-neutral-primary' >
            <div  className="flex flex-col gap-6">

            <h1 className="font-extrabold text-xl text-text-on-brand">404 - Oops, Page Not Found!</h1>
            <p className='font-medium text-lg text-text-on-brand'>This page does not exist</p>
            
            </div>
        </div>
        </div>
    )
}

type ErrorStateProps={
    children?: React.ReactNode,
    primaryText: string,
    secondaryText: string,
    tertiaryText?: string,
    imageUrl: string
}
export const ErrorState=({children, primaryText, secondaryText, tertiaryText, imageUrl}: ErrorStateProps)=>{
    const primaryTextClasses= "font-fraunces font-extrabold text-2xl text-text-on-brand";
    const subTextClasses="font-small text-lg text-text-on-brand"
    
    return(
        <>
            <div className='fixed inset-0 z-9999 h-screen w-screen grid place-items-center text-center bg-neutral-primary p-4 overscroll-none' >
                <div  className="flex flex-col gap-6">
                <Image className="justify-center items-center self-center w-full h-auto" src={imageUrl} alt="case roll sealed" width={275} height={275}/>
                    {primaryText && <h1 className={primaryTextClasses}>{primaryText}</h1>}
                    {secondaryText && <h3 className={subTextClasses}>{secondaryText}</h3>}
                    {tertiaryText && <p className={subTextClasses}>{tertiaryText}</p>}
                {children}
                </div>
            </div>
        </>

    )
}
