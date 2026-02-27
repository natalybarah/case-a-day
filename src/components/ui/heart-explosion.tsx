'use client';
import { useState, CSSProperties, useEffect } from "react";
import { Heart } from "lucide-react";

type HeartExplosionProps={
    rotateExplosion: string
}
const HeartExplosion=(props: HeartExplosionProps)=>{
   
    type HeartType={
        distanceXNew: string,
        distanceYNew: string
    }

    const [finalHeartInfoArray]= useState<HeartType[]>(()=> {

    const temporaryHeart: HeartType[]= [];
            for(let i=0; i <= 12; i++){
                        const calDegree= Math.floor(Math.random() * (180 - 90 + 1) + 90);
                    //  const calDegree= 180
                    let distanceLength=0
                    if(i <= 7){
                        distanceLength= 45;
                    } else if (i > 7 && i  <= 10){
                        distanceLength= 30
                    } else{
                        distanceLength= 20
                    }

                    //prior distance length 60, 45, 50

                        const coseno= Math.cos(calDegree * Math.PI/180)
                        const seno = Math.sin(calDegree * Math.PI / 180)
              
                        const distanceX= `${(distanceLength * coseno)}px`;
                        const distanceY= `${(distanceLength * seno)}px`
                

                        const heartObject: HeartType={
                            distanceXNew: distanceX,
                            distanceYNew: distanceY,       
                        };
                        
                    temporaryHeart.push(heartObject);     
        }
        return temporaryHeart;
    });
     
    function isEven(n: number){
        return (n % 2 ==0)
    }

    interface HeartStyle extends CSSProperties{
        '--distanceXStyle'?: string;
        '--distanceYStyle'?: string;
    };
               
    return(
            finalHeartInfoArray.map((heart, index)=>(

                <Heart key={index} 
                    style={{
                        
                        '--distanceXStyle': `${heart.distanceXNew}`,
                        '--distanceYStyle': `${heart.distanceYNew}`,
                    } as HeartStyle} 
                    strokeWidth={1.5}
                    className={` w-2 h-2 absolute   -translate-x-1/2 translate-y-1/2 ${props.rotateExplosion} 
                    ${isEven(index) ? `animate-[popping_0.4s_ease-out_0s_both]` : `animate-[popping_0.4s_ease-out_0.1s_both]` }   
            `}>
                </Heart>
            ))
    )
}

export default HeartExplosion;
