import { useEffect, useState } from "react";
import MenuIcon from "../assets/icons/icon-menu.svg?react";
import Search from "../assets/icons/icon-search.svg?react";
import bread from "../assets/images/img-bread.png";
import sausage from "../assets/images/img-sausage.png";
import pizza from "../assets/images/img-pizza.png";
import salad from "../assets/images/img-salad.png";
import { capitalizeFirstLetter } from "../helpers/text";
import Button from "../components/Button";
import { useDebounce } from "use-debounce";

type Category = 'all' | 'breakfast' | 'lunch' | 'drink' | 'dessert';

const categories: Category[] = ['all', 'breakfast', 'lunch', 'drink', 'dessert'];

interface Item {
  name: string;
  price: number;
  category: Category;
  imgSrc: string;
}

const items: Item[] = [
  {
    name: 'Bread & Eggs',
    price: 15000,
    category: 'breakfast',
    imgSrc: bread
  },
  {
    name: 'Bread & Eggs',
    price: 15000,
    category: 'breakfast',
    imgSrc: bread
  },
  {
    name: 'Pizza',
    price: 25000,
    category: 'lunch',
    imgSrc: pizza
  },
  {
    name: 'Pizza',
    price: 25000,
    category: 'lunch',
    imgSrc: pizza
  },
  {
    name: 'Salad',
    price: 10000,
    category: 'breakfast',
    imgSrc: salad
  },
  {
    name: 'Salad',
    price: 10000,
    category: 'breakfast',
    imgSrc: salad
  },
  {
    name: 'Sausage & Eggs',
    price: 20000,
    category: 'breakfast',
    imgSrc: sausage
  },
  {
    name: 'Sausage & Eggs',
    price: 20000,
    category: 'breakfast',
    imgSrc: sausage
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Item[]>(items.slice(0, 8));
  const [debouncedSearch] = useDebounce(search, 500);

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

    setData(filtered.slice(0, 8));
  }, [debouncedSearch, selectedCategory]);

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
        {data.length > 0 ? data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-y-2 md:gap-y-4 py-3 md:py-4 px-4 md:px-6 rounded-md shadow-xl items-center">
            <img src={item.imgSrc} alt="bread" className="size-28 md:size-48" />
            <p className="text-xs md:text-sm">{item.name}</p>
            <p className="text-sm md:text-base">IDR {item.price}/-</p>
            <Button className="w-fit">Add to Cart</Button>
          </div>
        )) : <p className="text-sm md:text-base text-slate-400">Data is empty</p>}
      </div>
    </div>
  )
}