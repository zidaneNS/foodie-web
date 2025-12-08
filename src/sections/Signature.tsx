import Fork from "../assets/icons/icon-fork.svg?react";
import saladImg from "../assets/images/img-salad.png";
import Button from "../components/Button";

export default function Signature() {
  return (
    <div className="flex flex-col items-center gap-y-4 md:gap-y-8 py-4 md:py-16">
      <div className="flex items-center gap-x-2 md:gap-x-4 px-2 py-3 border-b md:border-b-2 border-dark-red font-orelega text-xl">
        <Fork className="size-4 md:size-8" />
        <p className="text-sm md:text-lg">Our Signature</p>
      </div>
      <div className="flex md:justify-center items-center gap-x-8 md:gap-x-16 max-w-full overflow-x-auto pt-16 md:pt-40 px-6 md:px-0">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-y-2 md:gap-y-4 py-4 px-6 rounded-xl bg-black text-white items-center">
            <img src={saladImg} alt="salad" className="-mt-20 md:-mt-40" />
            <div className="flex justify-center items-center gap-x-6">
              <p className="text-sm md:text-base whitespace-nowrap">Salad</p>
              <p className="text-sm md:text-base whitespace-nowrap">IDR 25,000/-</p>
            </div>
            <Button className="w-fit">Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  )
}