

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
    secondaryText: string
}
export const ErrorState=({children, primaryText, secondaryText}: ErrorStateProps)=>{
    const primaryTextClasses= "font-extrabold text-xl text-text-on-brand";
    const secondaryTextClasses="font-medium text-lg text-text-on-brand"
    return(
        <>
            <div className='h-full w-screen grid place-items-center text-center bg-neutral-primary' >
                <div  className="flex flex-col gap-6">
                    <h1 className="text-amber-50"> HII THERE</h1>
                    {primaryText && <h1 className={primaryTextClasses}>{primaryText}</h1>}
                    {secondaryText && <h3 className={secondaryTextClasses}>{secondaryText}</h3>}
                {children}
                </div>
            </div>
        </>

    )
}
