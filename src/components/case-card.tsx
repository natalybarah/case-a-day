
import Image from "next/image";
import Link from "next/link";

const CaseCard= ({title, image, chips, imageAlt, slug})=>{

console.log(imageAlt, "imageAlt!")
    return(
        <Link  href={`/cases/${slug}?from=discover`}>
            <div className="flex flex-col xs:p-3 p-2 bg-neutral-secondary rounded-2xl border border-white/8 shadow-card h-full ">
                <div className="relative w-full h-[104px]  ">
                    <Image src={image} alt={imageAlt} fill className=" object-cover rounded-2xl max-h-[104px]  " />
                </div>
                <div className="flex flex-col gap-1.5 pt-2">
                    <p className="font-fraunces font-bold xs:text-[16px] text-[14px] leading-tight tracking-tight  text-text-brand-emphasis line-clamp-3">{title}</p>
                    <p className="font-medium text-[10px] xs:text-xs text-text-neutral-primary line-clamp-2">{chips[0]}<span> • </span>{chips[1]}</p>
                </div>
            </div>
        </Link>
    )
}

export default CaseCard;

//max-w-50%