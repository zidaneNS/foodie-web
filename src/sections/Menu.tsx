import { useEffect, useState } from "react";
import MenuIcon from "../assets/icons/icon-menu.svg?react";
import Search from "../assets/icons/icon-search.svg?react";
import ChevronLeft from "../assets/icons/icon-double-chevron-left.svg?react";
import ChevronRight from "../assets/icons/icon-double-chevron-right.svg?react";
import { capitalizeFirstLetter, currency } from "../helpers/text";
import Button from "../components/Button";
import { useDebounce } from "use-debounce";
import { items } from "../mockup/item";

export type Category = 'all' | 'breakfast' | 'lunch' | 'drink' | 'dessert';

const categories: Category[] = ['all', 'breakfast', 'lunch', 'drink', 'dessert'];

export interface Item {
  name: string;
  price: number;
  category: Category;
  imgSrc: string;
}

const MAX_ITEM = 6;

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Item[]>(items);
  const [debouncedSearch] = useDebounce(search, 500);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayData, setDisplayData] = useState<Item[]>(data.slice(0, MAX_ITEM));

  useEffect(() => {
    console.log('search', search);
    console.log('debounce', debouncedSearch);
  }, [search, debouncedSearch]);

  useEffect(() => {
    let filtered = items;

    if (debouncedSearch.trim().length > 0) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase().trim())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    setData(filtered);
  }, [debouncedSearch, selectedCategory]);

  useEffect(() => {
    setMaxPages(Math.ceil(data.length / MAX_ITEM));
  }, [data]);

  useEffect(() => {
    setDisplayData(data.slice((currentPage - 1) * MAX_ITEM, currentPage * MAX_ITEM));
  }, [data, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [maxPages]);

  function nextPage() {
    if (currentPage < maxPages) setCurrentPage(prev => prev + 1);
  };

  function prevPage() {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  }

  return (
    <div id="menu" className="flex flex-col items-center gap-y-4 px-6 scroll-mt-20">
      <div className="flex items-center gap-x-2 md:gap-x-4 px-2 py-3 border-b md:border-b-2 border-dark-red font-orelega text-xl">
        <p className="text-sm md:text-lg">Menu</p>
        <MenuIcon className="size-4 md:size-8" />
      </div>
      <div className="flex gap-x-4 items-center py-2 border-b border-slate-400 w-full md:w-1/3">
        <Search className="size-4 md:size-6" />
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} className="outline-none text-sm md:text-base flex-1" />
      </div>
      <div className="flex items-center justify-center gap-x-8 md:gap-x-16 py-6">
        {categories.map((category, idx) => (
          <p key={idx} onClick={() => setSelectedCategory(category)} className={`text-xs md:text-base cursor-pointer hover:text-dark-red ${selectedCategory === category ? 'text-dark-red' : 'text-black'}`}>{capitalizeFirstLetter(category)}</p>
        ))}
      </div>
      <div className="flex gap-4 md:gap-16 items-center justify-center flex-wrap">
        {data.length > 0 ? displayData.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-y-2 md:gap-y-4 py-3 md:py-4 px-4 md:px-6 rounded-md shadow-xl items-center">
            <img src={item.imgSrc} alt="bread" className="size-28 md:size-48" />
            <p className="text-xs md:text-sm">{item.name}</p>
            <p className="text-sm md:text-base">IDR {currency(item.price)}/-</p>
            <Button className="w-fit">Add to Cart</Button>
          </div>
        )) : <p className="text-sm md:text-base text-slate-400">Data is empty</p>}
      </div>
      <div className="flex justify-center items-center gap-x-4 md:gap-x-6">
        <ChevronLeft className="cursor-pointer" onClick={() => prevPage()} />
        {Array.from({ length: maxPages }).map((_, idx) => (
          <p onClick={() => setCurrentPage(idx + 1)} key={idx} className={`text-sm md:text-base ${currentPage === idx + 1 ? 'text-dark-red' : 'text-black'} cursor-pointer`}>{idx + 1}</p>
        ))}
        <ChevronRight className="cursor-pointer" onClick={() => nextPage()} />
      </div>
    </div>
  )
}