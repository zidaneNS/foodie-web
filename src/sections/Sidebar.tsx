import { useEffect, useRef, type SetStateAction } from "react";
import { navLinks } from "../components/Navbar";
import Button from "../components/Button";

interface SidebarProps {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({
  show,
  setShow
}: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!sidebarRef.current) return;

      if (!sidebarRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    }

    if (show) window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [show]);

  return (
    <div ref={sidebarRef} className={`fixed z-50 h-screen ${show ? 'right-0' : '-right-full'} w-64 md:hidden flex flex-col gap-y-4 px-4 py-8 bg-linear-to-b from-red-950 to-dark-red duration-300 text-white`}>
      <button onClick={() => setShow(false)} className="cursor-pointer w-fit">x</button>
      {navLinks.map((navLink, idx) => (
        <a key={idx} href={navLink.href} className={`text-center border-b border-white text-sm py-2`}>{navLink.label}</a>
      ))}
      <Button>Order Now</Button>
    </div>
  )
}