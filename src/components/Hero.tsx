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
          <div className="px-12 py-8 md:p-8 bg-black flex flex-col-reverse gap-y-8 md:flex-row md:gap-x-32 items-center text-white justify-center">
            <div className="flex flex-col gap-y-8 md:gap-y-6 md:max-w-3/7">
              <p className="text-5xl md:text-6xl">Savor the Essence of Asia on Every Plate</p>
              <p className="text-base md:text-lg">A fusion of tradition and innovation, crafted to delight your senses</p>
              <Button className="md:w-fit">Explore Menu</Button>
            </div>
            <img src={pizzaImg} alt="pizza" className="w-64 md:w-fit h-auto" />
          </div>
        </div>
      ))}
    </Carousel>
  )
}