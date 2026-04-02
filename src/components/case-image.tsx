import Image from "next/image";

type CaseImageProps={
    image? : string,
    image_alt_text?: string
}

const CaseImage= (props: CaseImageProps)=>{
    
    return(
        <div  className="relative w-full h-full"   >
            <Image fill priority="false" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  src={props.image} alt={props.image_alt_text}/>
        </div>

    )
}

export default CaseImage;