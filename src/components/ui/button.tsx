import {FC, ButtonHTMLAttributes} from 'react'


const baseButtonClasses="flex justify-center shadow-2xs/20 font-semibold text-text-brand-emphasis";

export function cx(...classes: string[]){
  return classes.filter(Boolean).join(' ')
}


type ButtonProps={
  impact?: 'bold' | 'boldLarge' | 'light', 
  message: string
}

const impactClasses: Record<NonNullable<ButtonProps['impact']>, string>={
  bold: 'bg-brand-solid w-fit px-3.5 py-0.5 rounded-xl',
  boldLarge: 'bg-brand-solid w-full px-3.5 py-2.5 rounded-xl text-[16px]',
  light: 'bg-solid-[#E1E1E1]/0.06 border-1 border-white/12 w-full px-3.5 py-2.5 rounded-xl text-[16px]'
  
}



const ActionButton: FC<ButtonProps>= ({impact= 'bold', message})=>{

    return(
       <div>
            <button className={ cx(baseButtonClasses, impactClasses[impact])}>{message}</button>
    
    </div>
    )
}

export default ActionButton;
// min-w-[87px]

/*
const ActionButtonTest= (props)=>{

    return(
        <div className="bg-brand-solid flex justify-center shadow-2xs/20 w-fit px-3.5 py-0.5 rounded-xl">
            <button className="font-semibold text-sm text-text-brand-emphasis">{props.message}</button>
        </div>
    )
}



export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

*/