
import Image from "next/image";
import Logo from "../../public/assets/caseadaylogo.png";
import ActionButton from "./ui/button";

const EmptyLibrary= ()=>{

    return(
        <div className=" flex flex-col items-center justify-center px-4 gap-4 h-[calc(100dvh-54px)]">
            <Image src={Logo} alt="case a day logo purple judge wig" width={108} height={101} />
            <div className=" flex flex-col gap-4">
                <h2 className="font-fraunces font-semibold text-3xl text-text-neutral-primary text-center">Nothing saved yet</h2>
                <p className="font-medium text-text-neutral-secondary text-xl text-center">Bookmark cases you love to build your personal docket</p>
            </div>
            <div className=" flex flex-col gap-4 w-full">
                <ActionButton message={"Explore collections"} impact="boldLarge" />
                <ActionButton message={"Explore featured cases"} impact="light"/>        
            </div>
        </div>

    )
}

export default EmptyLibrary;