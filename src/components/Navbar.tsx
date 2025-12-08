import Button from "./Button";
import Hamburger from "../assets/icons/icon-hamburger.svg?react";
import type { SetStateAction } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Menu',
    href: '#menu'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Contact',
    href: '#contact'
  },
  {
    label: 'Testimoni',
    href: '#testimoni'
  },
];

interface NavbarProps {
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({
  setShowSidebar
}: NavbarProps) {
  return (
    <div className="flex justify-between items-center px-6 py-4 sticky top-0 bg-white z-30 shadow-md">
      <h1 className="text-3xl md:text-5xl font-bold">Foo<span className="text-dark-red">die</span></h1>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-x-8">
        {navLinks.map((navLink, idx) => (
          <a href={navLink.href} key={idx} className="py-2 hover:border-b-2 border-dark-red duration-300">{navLink.label}</a>
        ))}
        <Button>Order Now</Button>
      </div>

      {/* mobile */}
      <Hamburger onClick={(e) => {
        e.stopPropagation();
        setShowSidebar(prev => !prev);
      }} className="block md:hidden cursor-pointer hover:-translate-1 duration-300" />
    </div>
  )
}