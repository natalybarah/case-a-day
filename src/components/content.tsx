
const Content= ()=>{



    return(
        <div className=" flex flex-col gap-4 bg-neutral-primary text-text-neutral-primary px-[23.5] pt-6 rounded-t-[40] relative pb-10" >
            <div className="flex  justify-center items-center self-center align-center bg-brand-surface w-[85] h-[30]  rounded-4xl 
         absolute -top-[15px] left-1/2 -translate-x-1/2">
                <span className="font-semibold text-[13]">  
                    Today
                </span>
            </div>
            <div className="flex flex-col gap-2 case-caption text-text-neutral-secondary ">
                <h2 className="text-3xl text-text-on-brand font-fraunces font-bold">Gideon v. Wainwright</h2>
                <div className="flex text-sm gap-2  italic">
                    <span>1963,</span>
                    
                    <span>U.S. Supreme Court</span>
                </div>
                <h3 className="text-text-brand-emphasis font-semibold italic text-center">Lawyers in criminal Court are neccesities, not luxuries</h3>
            </div>
            <div>
                <p className="font-light">
                    Florida. A pool hall is broken into and a man named Clarence Earl Gideon is charged for 
                    intent to commit petty larceny—a felony at the time. He can’t afford a lawyer and asks the 
                    trial judge to appoint one. Relying on Betts v. Brady (1942), which allowed states to deny 
                    counsel in most non-capital cases, the judge refused. Gideon has to represent himself, 
                    is convicted, and receives a five-year sentence.
                    <br/>
                    <br/>
                    From his cell, Gideon files a handwritten petition for a writ of habeas corpus in the 
                    Florida courts, arguing that denying him a lawyer violated his constitutional rights; 
                    the state courts rejects it. So he petitions to the U.S. Supreme Court in forma pauperis. 
                    The Court takes the case and appoints Abe Fortas (later a Justice) to argue for him.
                    The result is unanimous and historic. The Court overrules Betts v. Brady and holds that
                     the Sixth Amendment right to counsel is fundamental applying to the states through the 
                     Fourteenth Amendment. If you’re charged with a felony and can’t afford a lawyer, the 
                     state must provide one. As the Court put it, “Lawyers in criminal court are necessities, 
                     not luxuries.”
                      <br/>
                       
                    <br/>
                     On retrial—with counsel—Gideon is acquitted. The ripple effects of Gideon v. Wainwright 
                     are huge: public-defense systems expand, and later decisions extend counsel to some 
                     misdemeanors where incarceration is possible. A handwritten petition reshapes 
                     American justice.
                </p>
            </div>
        </div>
    )
}

export default Content;