import { useEffect, useRef, type SetStateAction } from "react";

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
        console.log('outside');
        setShow(false);
      }
    }

    if (show) window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [show]);

  return (
    <div ref={sidebarRef} className={`fixed z-50 h-screen ${show ? 'right-0' : '-right-full'} w-64 md:hidden flex flex-col gap-y-4 px-4 py-8 bg-linear-to-b from-red-950 to-dark-red duration-300`}>

    </div>
  )
}