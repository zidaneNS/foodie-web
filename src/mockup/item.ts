import bread from "../assets/images/img-bread.png";
import sausage from "../assets/images/img-sausage.png";
import pizza from "../assets/images/img-pizza.png";
import salad from "../assets/images/img-salad.png";

export type Category = 'all' | 'breakfast' | 'lunch' | 'drink' | 'dessert';

export const categories: Category[] = ['all', 'breakfast', 'lunch', 'drink', 'dessert'];
export interface Item {
  name: string;
  price: number;
  category: Category;
  imgSrc: string;
}

export const items: Item[] = [
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
];