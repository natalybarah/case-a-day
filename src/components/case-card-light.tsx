import Image from "next/image";
import Link from "next/link";
import { CaseItem } from "../app/(main)/discover/[slug]/page";

export const CaseCardLightSkeleton= ()=> {
 return (
        <div className="flex flex-row gap-3 pb-2.5 border-b-white/10 border-b animate-pulse">
            <div className="bg-white/10 rounded-xl  w-[72px] h-[72px] shrink-0"></div>
            <div className="flex flex-col gap-4 w-full">
                <div className="bg-white/10  rounded h-3.5 gap-1 w-[85%]"></div>
                <div className="bg-white/10 h-3 rounded row-span-2 w-[50%]  "></div>
            </div>
        </div>
    )
}

const CaseCardLight= ({...caseItem}: CaseItem)=> {
 //   console.log(image, "image from casecardlight")
    return (
        <Link href={`/cases/${caseItem.slug}`}>
            <div className="flex flex-row gap-3 pb-2.5 border-b-white/10 border-b">
                <div className="relative w-18 h-18">
                    <Image src={caseItem.image} alt={caseItem.image_alt_text}sizes="75px" fill className="rounded-xl object-cover max-h-18 max-w-18" />
                </div>
                <div className="gap">
                    <p className="font-fraunces font-semibold text-[16px] text-text-neutral-primary ">{caseItem.title}</p>
                    <p className="text-text-neutral-secondary font-regular text-[14px]">{caseItem.court}<span className="mx-1">•</span>{caseItem.year}</p>
                </div>
            </div>
        </Link>
    )
}

export default CaseCardLight;
