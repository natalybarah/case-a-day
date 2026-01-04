
import Image from "next/image";

const AttorneyCard= ()=>{
    return(
        <div className="flex flex-row gap-3 min-w-[221px]">
            <Image src="/assets/ruthbaderginsburg.jpg" alt="ruth bader" width="64" height="64" className="rounded-[999em]"/>
            <div className="flex flex-col">
                <h2 className="font-semibold text-sm text-text-brand-emphasis">Ruth Bader  Ginsburg</h2>
                <span className="font-regular text-xs text-text-neutral-secondary ">Gender Equality</span>
                <span className="font-regular text-xs text-text-neutral-secondary ">ACLU Women's Rights</span>
            </div>
        </div>
    )
}

export default AttorneyCard;
