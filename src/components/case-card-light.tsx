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

const CaseCardLight= ()=> {
    return (
        <div className="flex flex-row gap-3 pb-2.5 border-b-white/10 border-b">
            <Image src="/images/gideonvwainwright.png" alt="case card" height={72} width={72} className="rounded-xl" />
            <div className="gap">
                <p className="font-fraunces font-semibold text-[16px] text-text-neutral-primary ">Gideon v. Wainwright</p>
                <p className="text-text-neutral-secondary font-regular text-[14px]">U.S. Supreme Court <span>•</span> 1963 </p>
            </div>
        </div>
    )
}

export default CaseCardLight;
