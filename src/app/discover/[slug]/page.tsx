import {ArrowLeft} from 'lucide-react'
import Image from 'next/image';
import CollectionImage from '../../../assets/waitlikeitshard.jpg';
import Chip from '@/src/components/ui/chip';
import CaseCard from '@/src/components/case-card';

const Collection= ()=>{

    return(
        <div className="bg-library h-full flex flex-col p-4 gap-5 ">
            <div className="flex flex-row gap-2 pb-4 border-b border-white/8">
                <ArrowLeft color="#C7CDD4" />
                <p className="font-semibold text-[18px] text-text-brand-emphasis font-fraunces">Wait, like, it's hard?</p>
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
            </div>
                    
        </div>
    )
}

export default Collection;
