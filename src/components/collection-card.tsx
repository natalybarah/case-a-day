import { FC } from "react";
import Image from "next/image";
import Chip from "./ui/chip";
import CollectionCardImage from '../assets/lawbyaccident.jpg'
//w-[361px]${props.isNew ? "w-full" : "w-[calc(50%-0.5rem)]"} 383 WIDTH xs:min-h-52   --------${props.isNew ? "xs:aspect-video aspect-8/4"  : "h-40 xs:min-h-52"} 

type CollectionCardProps={
    isNew?: boolean
}
const CollectionCard: FC<CollectionCardProps>=(props)=>{


    return(
        <div className={`  flex flex-col items-start p-2.5  relative ${props.isNew? "w-full" : "w-[calc(50%-0.5rem)]"}  bg-cover ${props.isNew ? "aspect-video"  : "aspect-3/4"}  bg-no-repeat  max-h-40 xs:max-h-none shadow-[0_8px_24px_rgba(0,0,0,0.35)] rounded-2xl`}>
            <Image src={CollectionCardImage} alt="collection" fill className="object-cover object-top rounded-2xl"/> 
            <div  className="absolute  inset-0 w-full h-full bg-linear-to-t from-black/70 to-transparent rounded-2xl">
                <div className=" absolute  bg-brand-solid/14 w-full h-full rounded-2xl"></div>
            </div>
            <Chip/>
                <div className="relative z-10 h-full justify-end flex flex-col ">
                    <h3 className={`text-text-brand-emphasis font-fraunces ${props.isNew ? "text-[22px]" : "text-[18px]"} font-bold`}>Law by accident</h3>
                    <p className={`text-text-neutral-secondary font-inter ${props.isNew ? "text-sm" : "text-xs"} font-medium`}>Odd facts <span> • </span>Landmark rules</p>
                </div>
         </div>
    )
}

export default CollectionCard;


// Might need to change max height none to h-52