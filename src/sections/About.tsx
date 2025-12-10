import { useRef, useState, useEffect } from "react";
import Group from "../assets/icons/icon-group.svg?react";
import interior from "../assets/images/img-interior.jpg";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, {
      threshold: 0.3
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    }
  }, []);
  return (
    <div ref={ref} id="about" className="flex flex-col gap-y-6 md:gap-y-8 px-12 items-center scroll-mt-8 md:scroll-mt-20 py-8">
      <div className="flex items-center gap-x-2 md:gap-x-4 px-2 py-3 border-b md:border-b-2 border-dark-red font-orelega text-xl">
        <Group className="size-4 md:size-8" />
        <p className="text-sm md:text-lg">About Us</p>
      </div>
      <div className={`flex flex-col md:flex-row gap-8 items-center ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'} duration-1000`}>
        <div className="flex justify-center items-center px-6 py-4 rounded-md shadow-md bg-black">
          <img src={interior} alt="interior" />
        </div>
        <div className="flex flex-col gap-y-4 items-center md:items-start">
          <p className="text-2xl md:text-3xl font-orelega">Our Service</p>
          <p className="text-sm md:text-base whitespace-pre-wrap">Kami percaya bahwa makanan terbaik lahir dari bahan segar, proses yang jujur, dan cinta pada setiap detail.
            Di Foodie, kami menghadirkan hidangan pilihan yang diracik dengan resep terbaik dan sentuhan modern, tanpa meninggalkan cita rasa autentik.
            Setiap menu kami dibuat untuk menemani momen Anda—mulai dari santapan santai hingga perayaan spesial.Kami bukan sekadar menyajikan makanan, kami menyajikan pengalaman.</p>
        </div>
      </div>
      <div className={`flex flex-col md:flex-row-reverse gap-8 items-center ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'} duration-1000`}>
        <div className="flex justify-center items-center px-6 py-4 rounded-md shadow-md bg-black">
          <img src={interior} alt="interior" />
        </div>
        <div className="flex flex-col gap-y-4 items-center md:items-start">
          <p className="text-2xl md:text-3xl font-orelega">Our Service</p>
          <p className="text-sm md:text-base whitespace-pre-wrap">Kami percaya bahwa makanan terbaik lahir dari bahan segar, proses yang jujur, dan cinta pada setiap detail.
            Di Foodie, kami menghadirkan hidangan pilihan yang diracik dengan resep terbaik dan sentuhan modern, tanpa meninggalkan cita rasa autentik.
            Setiap menu kami dibuat untuk menemani momen Anda—mulai dari santapan santai hingga perayaan spesial.Kami bukan sekadar menyajikan makanan, kami menyajikan pengalaman.</p>
        </div>
      </div>
    </div>
  )
}