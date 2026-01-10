import { FC } from "react";

type ChipProps={
    message: string
}



const Chip: FC<ChipProps>= ({message})=>{
    return(
        <div className="bg-neutral-tertiary/60 border-brand-solid/60 border xs:min-w-[58px] min-w-12 w-fit xs:h-[23px] h-[18px] font-bold xs:text-xs text-[10px]  rounded-[999em] flex items-center justify-center z-30 p-2.5">
            <p className="text-text-brand-emphasis/60">{message}</p>
        </div>
    )
}

export default Chip;