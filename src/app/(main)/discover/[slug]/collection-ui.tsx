'use client'
import {ArrowLeft, ArrowRight} from 'lucide-react'
import Image from 'next/image';
import Chip from '@/src/components/ui/chip';
import CaseCard from '@/src/components/case-card';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { CollectionUIProps } from './page';
import Link from 'next/link';




const CollectionUI= ({collection, cases}: CollectionUIProps)=>{

    const router= useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    console.log(collection, 'collection desde UI')
    const handleScroll=(e: React.UIEvent<HTMLDivElement>)=>{
      const scrollPosition=  e.currentTarget.scrollTop

      if(scrollPosition > 200){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      } 
    }

    return(
        <div onScroll={handleScroll} className="bg-library h-full flex flex-col p-4 pt-12 gap-5 overflow-y-scroll xs:overflow no-scrollbar ">
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full md:max-w-[430px] z-60 flex items-center p-4 gap-3 transition-all duration-300 
                ${isScrolled ? "backdrop-blur-sm border-b border-white/10 shadow-md" : "bg-transparent"} `}>
                <ArrowLeft color="#C7CDD4" onClick={()=> router.back()}/>
               { isScrolled ?  
               <p className="font-semibold  text-text-brand-emphasis font-fraunces uppercase
                transition-all duration-700 text-[16px]">{collection.title}</p> : null}
            </div>
            <div className="relative w-full aspect-16/7 min-h-[200px]">
             
                <Image src={collection.image} alt="woman lawyer in court" priority fill className="z-30 rounded-[20px] object-cover object-[60%_35%] relative" />
                <div className="flex flex-col gap-2 absolute inset-0 z-50 justify-end p-4">
                    <Chip message="Collection"/>
                    <p className=" text-text-brand-emphasis font-fraunces font-bold text-[22px]">{collection.title}</p> 
                    
                </div>
            </div>
            <p className="text-sm text-text-neutral-secondary text-center">{collection.summary}</p>
            
            <div className={`  ${cases.length > 1 ? "grid grid-cols-2 gap-4" : "flex justify-center "}`}>
                {cases.length > 1 ?
                
                    cases.map(caseItem=>(
                    <div key={caseItem.id} className={` ${cases.length ===1  ? "w-[calc(50%-0.5rem)] min-w-40" : "w-full"}`}>
                       <CaseCard  title={caseItem.title} image={caseItem.image} slug={caseItem.slug} chips={caseItem.chips} imageAlt={caseItem.image_alt_text}/>
                    </div>
                ))
                : 

                <div className='col-span-full flex flex-col items-center justify-center bg-neutral-secondary border border-white/10 p-8 rounded-2xl mt-10 text-center gap-4 shadow-card'>
                        <div className='bg-brand-surface/20 p-3 rounded-full'>
                        
                            <div className='w-2 h-2 bg-brand-solid rounded-full animate-pulse'></div>
                        </div>
                        
                        <div className='space-y-2'>
                            <h2 className='text-text-brand-emphasis font-fraunces font-bold text-[20px]'>
                                Curating Cases...
                            </h2>
                            <p className='text-text-neutral-secondary text-sm max-w-[280px] mx-auto'>
                                We are actively migrating our database. Explore our featured demo collection to see the platform in action.
                            </p>
                        </div>
                        <Link 
                            href="/discover/wait-like-its-hard" 
                            className='mt-2 flex items-center gap-2 bg-brand-solid hover:bg-brand-solid-hover text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm shadow-card-pink'
                        >
                            View Demo Collection <ArrowRight size={18} />
                        </Link>
                    </div>
                                    
                                }
                                    
                                </div>      
                            </div>
    )
}

export default CollectionUI;
//className={` gap-4 ${cases.length > 1 ? "grid grid-cols-2" : "flex justify-center "}`}
//className={cases.length === 1 ? "col-span-2 mx-auto w-[calc(50%-0.5rem)] min-w-[150px] j" : "w-full" }