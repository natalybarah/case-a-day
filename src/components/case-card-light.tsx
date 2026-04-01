import Image from "next/image";

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

const CaseCardLight= ({title, court, year, image}: {title: string, court: string, year: string, image: string})=> {
    console.log(image, "image from casecardlight")
    return (
        <div className="flex flex-row gap-3 pb-2.5 border-b-white/10 border-b">
            <Image src={image} alt="case card" height={70} width={70} className="rounded-xl" />
            <div className="gap">
                <p className="font-fraunces font-semibold text-[16px] text-text-neutral-primary ">{title}</p>
                <p className="text-text-neutral-secondary font-regular text-[14px]">{court}<span>•</span>{year}</p>
            </div>
        </div>
    )
}

export default CaseCardLight;
