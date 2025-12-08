import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  ...rest
}: ButtonProps) {
  return <button 
    className={`text-white bg-dark-red cursor-pointer duration-300 hover:bg-red-900 rounded-md shadow-md px-4 py-2 hover:-translate-y-1 text-xs md:text-base ${className}`}
    {...rest}
  >{children}</button>
}