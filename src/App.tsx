import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./sections/Sidebar";
import Signature from "./sections/Signature";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import About from "./sections/About";
import { type Item } from "./mockup/item";
import CartModal from "./components/CartModal";
import CartIcon from "./assets/icons/icon-cart.svg?react";

export default function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Sidebar
        show={showSidebar}
        setShow={setShowSidebar}
      />
      <Navbar
        setShowSidebar={setShowSidebar}
      />
      <div className="overflow-x-hidden">
        <Hero />
        <Signature />
        <Menu
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <About />
        <Testimonials />
        <Footer />
      </div>
      <CartModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <div onClick={() => setShowModal(true)} className="fixed right-8 hover:scale-120 duration-300 bottom-16 md:bottom-32 bg-dark-red text-white flex justify-center items-center rounded-full p-2 cursor-pointer">
        <CartIcon className="text-white size-8 md:size-12" />
      </div>
    </div>
  )
}