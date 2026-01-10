
import Image from "next/image";
import PriceCase from '../assets/pricewaterhousevhopkins.jpg';


const CaseCard= ()=>{
    return(
        <div className="flex flex-col p-3 bg-neutral-secondary rounded-2xl border border-white/8 shadow-card">
            <Image src={PriceCase} alt="woman in conference room" sizes="50vw" className="w-full object-cover rounded-2xl max-h-[104px]" />
            <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-fraunces font-bold text-[16px] text-text-brand-emphasis">Price Waterhouse v. Hopkins</p>
                <p className="font-medium text-xs text-text-neutral-primary">High impact<span>•</span>Landmark era: late 1980s</p>
                
            </div>
        </div>
    )
}

export default CaseCard;