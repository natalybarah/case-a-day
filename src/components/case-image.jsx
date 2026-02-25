import Image from "next/image";
//import GideonImage from "../assets/gideonvwainwright.png"
const CaseImage= ()=>{
    return(
        <div  className="relative w-full h-full"   >
            <Image fill priority="false" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  src="/assets/gideonvwainwright.png" alt="gideon in court"/>
        </div>

    )
}

export default CaseImage;