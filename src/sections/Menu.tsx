import MenuIcon from "../assets/icons/icon-menu.svg?react";
import Search from "../assets/icons/icon-search.svg?react";

export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex items-center gap-x-2 md:gap-x-4 px-2 py-3 border-b md:border-b-2 border-dark-red font-orelega text-xl">
        <p className="text-sm md:text-lg">Menu</p>
        <MenuIcon className="size-4 md:size-8" />
      </div>
      <div className="flex gap-x-4 items-center py-2 border-b border-slate-400 w-32">
        <Search className="size-4" />
        <input type="text" placeholder="Search" className="outline-none text-sm md:text-base" />
      </div>
    </div>
  )
}