

const ButtonContainer= ({children, message}:{children: React.ReactNode, message: string})=>{

    return(
        <div className="flex flex-col gap-3 items-center border-white/12 border p-3 rounded-2xl p-[50px]">
            {children}
            <div className="text-text-neutral-secondary">
                {message}
            </div>
           
        </div>

    )
}

export default ButtonContainer;