
import Image from "next/image";
import PriceCase from '../assets/pricewaterhousevhopkins.jpg';
import Link from "next/link";

const CaseCard= ()=>{

//C:\Projects\case-a-day\public\images\pricewaterhousevhopkins.jpg
//tal vez aqui solo deba tener el prop de imageURL. pero lo que dependera es el 

//aqui solo dare la informacion para la hora de navegar y dare el slug que necesito cases/price-waterhouse-v-hopkins que me lo da
//neon en mi base de datos y esto me ayuda a navegar hacia la pagina correcta y especifica del caso
//pero como Cases component recibe x cosa y sabe que contenido especifico renderizar?


    return(
        <Link href="/cases/price-waterhouse-v-hopkins">
        <div className="flex flex-col xs:p-3 p-2 bg-neutral-secondary rounded-2xl border border-white/8 shadow-card">
            <Image src={PriceCase} alt="woman in conference room" sizes="50vw" className="w-full object-cover rounded-2xl max-h-[104px]" />
            <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-fraunces font-bold xs:text-[16px] text-[14px] leading-tight tracking-tight  text-text-brand-emphasis line-clamp-3">Price price price price price Waterhouse v. Hopkins</p>
                <p className="font-medium text-[10px] xs:text-xs text-text-neutral-primary line-clamp-2">High impact<span> • </span>Landmark era: late 1980s</p>
            </div>
        </div>
        </Link>
    )
}

export default CaseCard;