import Image from "next/image";


const CaseCard= ()=> {
    return (
        <div className="flex flex-row gap-3 pb-2.5 border-b-white/10 border-b-1">
            <Image src="/assets/gideonvwainwright.png" alt="case card" height={72} width={72} className="rounded-xl" />
            <div className="gap">
                <p className="font-fraunces font-semibold text-[16px] text-text-neutral-primary ">Gideon v. Wainwright</p>
                <p className="text-text-neutral-secondary font-regular">U.S. Supreme Court <span>•</span> 1963 </p>
            </div>
        </div>
    )
}

export default CaseCard;
