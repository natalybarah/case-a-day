import ActionButton from "../components/ui/button";

const PartialLibrary= ()=>{

    return(
        <div className="flex flex-col gap-5 items-center">
            <h3 className="font-fraunces font-semibold text-[16px] text-text-brand-emphasis">Just a handful saved—want more?</h3>
            <ActionButton message={"Explore featured cases"} />
        </div>
    )
}

export default PartialLibrary;
