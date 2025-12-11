import type { ButtonHTMLAttributes } from "react";

type ButtonType = 'primary' | 'cancel';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  buttonType?: ButtonType;
}

export default function Button({
  children,
  className,
  buttonType,
  ...rest
}: ButtonProps) {
  return <button 
    onClick={() => {window.location.replace('#menu')}}
    className={`text-white ${buttonType === 'cancel' ? 'bg-black hover:bg-black' : 'bg-dark-red hover:bg-red-900'} cursor-pointer duration-300 rounded-md shadow-md px-4 py-2 hover:-translate-y-1 text-xs md:text-base ${className}`}
    {...rest}
  >{children}</button>
}