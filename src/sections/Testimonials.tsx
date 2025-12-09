import Group from "../assets/icons/icon-group.svg?react";
import profile from "../assets/images/img-profile-pic.png";

export default function Testimonials() {
  return (
    <div id="testimoni" className="flex flex-col items-center gap-y-4 py-8 md:py-16 px-12 md:px-6 scroll-mt-20">
      <div className="flex items-center gap-x-2 md:gap-x-4 px-2 py-3 border-b md:border-b-2 border-dark-red font-orelega text-xl">
        <Group className="size-4 md:size-8" />
        <p className="text-sm md:text-lg">Testimonials</p>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row justify-center items-center gap-x-8 mt-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-y-4 px-4 py-2 rounded-md shadow-md hover:scale-105 duration-300">
            <p className="text-xs md:text-sm">Menu makanan di sini sangat lezat dengan harga yang terjangkau. Visual yang modern dan estetik sehingga nyaman untuk makan di Foodie</p>
            <span className="w-full border border-slate-200"></span>
            <div className="flex gap-x-3 items-center">
              <img src={profile} alt="profile" className="size-12 md:size-16" />
              <div className="flex flex-col">
                <p className="text-sm md:text-base">John Doe</p>
                <p className="text-xs">john@example.com</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}