'use client';
import { useState, CSSProperties } from "react";
import { Heart } from "lucide-react";

const HeartExplosion=()=>{
   
    type HeartType={
        distanceX: string,
        distanceY: string
    }

    const [heartContainer]= useState<HeartType[]>(()=> {

    const temporaryHeart: HeartType[]= [];
            for(let i=0; i <= 12; i++){
                    const calDegree= Math.floor(Math.random() * (180 - 90 + 1) + 90);
             
                    let distanceLength=0
                    distanceLength = i <= 7 ? 45 : i > 7 && i <= 10 ? 30 : 20

                        const cos= Math.cos(calDegree * Math.PI/180)
                        const sin = Math.sin(calDegree * Math.PI / 180)
              
                        const x= `${(distanceLength * cos)}px`;
                        const y= `${(distanceLength * sin)}px`
                
                        const heartObject: HeartType={
                            distanceX: x,
                            distanceY: y,       
                        };
                        
                    temporaryHeart.push(heartObject);     
        }
        return temporaryHeart;
    });
     
    function isEven(n: number){return (n % 2 ==0)}

    interface HeartStyle extends CSSProperties{
        '--distanceXStyle'?: string;
        '--distanceYStyle'?: string;
    };
               
    return(
            heartContainer.map((heart, index)=>(
                <Heart 
                    key={index}
                    style={{
                        
                        '--distanceXStyle': `${heart.distanceX}`,
                        '--distanceYStyle': `${heart.distanceY}`,
                    } as HeartStyle} 
                    strokeWidth={1.5}
                    className={` w-2 h-2 absolute   -translate-x-1/2 translate-y-1/2 text-red-500 fill-red-500
                    ${isEven(index) ? `animate-[popping_0.4s_ease-out_0s_both]` : `animate-[popping_0.4s_ease-out_0.1s_both]` }   
                    `}>
                </Heart>
            ))
    )
}

export default HeartExplosion;
