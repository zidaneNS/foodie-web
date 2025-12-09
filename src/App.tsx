import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./sections/Sidebar";
import Signature from "./sections/Signature";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar
        show={showSidebar}
        setShow={setShowSidebar}
      />
      <Navbar
        setShowSidebar={setShowSidebar}
      />
      <Hero />
      <Signature />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  )
}