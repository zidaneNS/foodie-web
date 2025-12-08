import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./sections/Sidebar";
import Signature from "./sections/Signature";
import Menu from "./sections/Menu";

export default function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex flex-col pb-8">
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
    </div>
  )
}