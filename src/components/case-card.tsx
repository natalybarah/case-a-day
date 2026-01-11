
import Image from "next/image";
import PriceCase from '../assets/pricewaterhousevhopkins.jpg';


const CaseCard= ()=>{
    return(
        <div className="flex flex-col xs:p-3 p-2 bg-neutral-secondary rounded-2xl border border-white/8 shadow-card">
            <Image src={PriceCase} alt="woman in conference room" sizes="50vw" className="w-full object-cover rounded-2xl max-h-[104px]" />
            <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-fraunces font-bold xs:text-[16px] text-[14px] leading-tight tracking-tight  text-text-brand-emphasis line-clamp-3">Price price price price price Waterhouse v. Hopkins</p>
                <p className="font-medium text-[10px] xs:text-xs text-text-neutral-primary line-clamp-2">High impact<span> • </span>Landmark era: late 1980s</p>
                
            </div>
        </div>
    )
}

export default CaseCard;