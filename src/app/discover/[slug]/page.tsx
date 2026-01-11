'use client'
import {ArrowLeft} from 'lucide-react'
import Image from 'next/image';
import CollectionImage from '../../../assets/waitlikeitshard.jpg';
import Chip from '@/src/components/ui/chip';
import CaseCard from '@/src/components/case-card';
import { useState } from 'react';
//flex-row gap-2 pb-4 border-b border-white/8 backdrop-blur-lg old classes for header
const Collection= ()=>{

    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll=(e: React.UIEvent<HTMLDivElement>)=>{
      const scrollPosition=  e.currentTarget.scrollTop

      if(scrollPosition > 250){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

    }
    return(
        <div onScroll={handleScroll} className="bg-library h-full flex flex-col p-4  gap-5 overflow-y-scroll xs:overflow ">
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full md:max-w-[430px] z-[60]  flex items-center p-4 transition-all duration-300 
                ${isScrolled ? "backdrop-blur-sm border-b border-white/10 shadow-md" : "bg-transparent"} `}>
                <ArrowLeft color="#C7CDD4" />
                <p className="font-semibold text-[18px] text-text-brand-emphasis font-fraunces">Wait, like it's hard?</p>
            </div>
            <div className=" relative">
                <Image src={CollectionImage} alt="woman lawyer in court"  height={350} className="z-30 rounded-[20px] w-full  aspect-16/7 object-cover object-[60%_35%] relative" />
                <div className="flex flex-col gap-2 absolute inset-0 z-50 justify-end p-4">
                    <p className="text-text-brand-emphasis font-fraunces font-bold text-[22px]">WAIT, LIKE IT'S HARD</p>  
                    <Chip message="Collection"/>
                </div>
            </div>
            <p className="text-xs text-text-neutral-secondary text-center">Explore the rulings driven by female advocates who dismantled discrimination. From the bench to behind the scenes, 
            they changed the course of history.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
            </div>
                    
        </div>
    )
}

export default Collection;
