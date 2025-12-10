import { Carousel } from "antd";
import Button from "./Button";
import pizzaImg from "../assets/images/img-pizza.png";

export default function Hero() {
  return (
    <Carousel
      infinite
      autoplay
      arrows
    >
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
          <div className="p-6 md:p-8 bg-black flex md:gap-x-64 items-center text-white justify-center">
            <div className="flex flex-col gap-y-3 md:gap-y-6 md:max-w-1/3">
              <p className="text-xl md:text-5xl">Savor the Essence of Asia on Every Plate</p>
              <p className="text-[0.5rem] md:text-xs">A fusion of tradition and innovation, crafted to delight your senses</p>
              <Button className="w-fit">Explore Menu</Button>
            </div>
            <img src={pizzaImg} alt="pizza" className="w-32 md:w-fit h-auto" />
          </div>
        </div>
      ))}
    </Carousel>
  )
}