
'use client'
import CaseCardLight from "@/src/components/case-card-light";
import PartialLibrary from "../../../components/partial-library";
//import EmptyLibrary from "@/src/components/empty-library";
import { useState, useEffect, CSSProperties, Dispatch, SetStateAction } from "react";
import { Heart } from "lucide-react";

type BoxProps={
    setToggle?: Dispatch<SetStateAction<boolean>>
}

 const Box=(props: BoxProps)=>{
                   
             
    type HeartType={
        distanceXNew: string,
        distanceYNew: string
    }

    const [finalHeartInfoArray]= useState<HeartType[]>(()=> {

    const temporaryHeart: HeartType[]= [];
            for(let i=0; i <= 12; i++){
                        const calDegree= Math.floor(Math.random() * (180 - 0 + 1) + 0);
                    //  const calDegree= 180
                    let distanceLength=0
                    if(i <= 7){
                        distanceLength= 45;
                    } else if (i > 7 && i  <= 10){
                        distanceLength= 35
                    } else{
                        distanceLength= 25
                    }

                    //distance length 60, 45, 50

                        const coseno= Math.cos(calDegree * Math.PI/180)
                        const seno = Math.sin(calDegree * Math.PI / 180)
                    //const distanceLength= Math.floor(Math.random() * (60 - 30 + 1) + 30);
                        //const distanceLength= 60;
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
}
                function isEven(n: number){
                    return (n % 2 ==0)
                }

                interface HeartStyle extends CSSProperties{
                    '--distanceXStyle'?: string;
                    '--distanceYStyle'?: string;
                };
               

//NEW BOX

/*

 className={`
                        ${ toggle ? "transition  duration-80  ease-in-out scale-110 text-brand-surface fill-brand-surface revert" : "text-text-neutral-primary"}
                        ` }>

*/

const Library = ()=> {

   const [toggle, setToggle] =useState(false)



    return(
        <div className=" flex flex-col bg-library h-dvh pt-4 p-4 gap-7.5">
            <h1 className="font-black font-fraunces text-text-brand-emphasis text-[40px]">Your docket</h1>
            <div className=" flex flex-col gap-2.5">
                <CaseCardLight/>
                <CaseCardLight/>
                <CaseCardLight/>
                
            </div>
            <div className="flex flex-col items-center justify-center m-auto translate-y-[-54px]">
            
           
                    <div className="relative ">
                        <Heart onClick={()=>setToggle(prev=> !prev) }  
                        className={`${toggle ? "animate-[filler_0.4s_ease-in-out_forwards]" : "text-text-neutral-primary"}`}>
                         </Heart>
                        <div className=" w-0 h-0 absolute top-1/2 left-1/2 ">
                             {toggle ? <div></div>: null}
                        </div>
                    </div>
           
           {/*  <PartialLibrary/> 
                 <EmptyLibrary  />*/}

            </div>
        </div>
       
        
    )
}

export default Library;
