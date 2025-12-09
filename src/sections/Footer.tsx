import Message from "../assets/icons/icon-message.svg?react";
import Phone from "../assets/icons/icon-phone.svg?react";
import Pin from "../assets/icons/icon-pin.svg?react";
import Facebook from "../assets/icons/icon-facebook.svg?react";
import X from "../assets/icons/icon-x.svg?react";
import Instagram from "../assets/icons/icon-instagram.svg?react";
import Tiktok from "../assets/icons/icon-tiktok.svg?react";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:justify-between px-12 py-8 bg-black text-white">
      <div className="flex flex-col md:justify-between gap-y-4">
        <h1 className="text-xl md:text-5xl font-bold">Foo<span className="text-dark-red">die</span></h1>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 items-center">
            <div className="flex gap-x-3 items-center">
              <Message />
              <p className="text-sm md:text-base">foodie@example.com</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Phone />
              <p className="text-sm md:text-base">(+63) 123 456 789</p>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Pin />
            <p className="text-sm md:text-base">St Sumatera 48, East Java</p>
          </div>
        </div>
        <Button className="w-fit">Order Now</Button>
        <div className="flex gap-x-4 items-center">
          <Facebook />
          <X />
          <Instagram />
          <Tiktok />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 md:flex-row gap-x-12">
        <div className="flex gap-x-12">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Menu</h2>
            <div className="flex flex-col gap-y-4">
              <a className="text-xs md:text-sm" href="#about">About</a>
              <a className="text-xs md:text-sm" href="#menu">Menu</a>
              <a className="text-xs md:text-sm" href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Others</h2>
            <div className="flex flex-col gap-y-4">
              <a className="text-xs md:text-sm" href="#">Terms of Service</a>
              <a className="text-xs md:text-sm" href="#">Policy Service</a>
              <a className="text-xs md:text-sm" href="#">Cookie Policy</a>
              <a className="text-xs md:text-sm" href="#">Partners</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <h2 className="text-xl md:text-2xl font-bold">Open at</h2>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Monday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Tuesday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Wednesday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Thursday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Friday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Saturday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
            <div className="flex gap-x-6 justify-between p-2 border-b border-white text-xs md:text-sm">
              <p>Sunday</p>
              <p>09.00 - 21.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}