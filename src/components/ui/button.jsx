

const ActionButton= (props)=>{

    return(
        <div className="bg-brand-solid flex justify-center shadow-2xs/20 w-fit px-3.5 py-0.5 rounded-xl">
            <button className="font-semibold text-sm text-text-brand-emphasis">{props.message}</button>
        </div>
    )
}

export default ActionButton;
// min-w-[87px]