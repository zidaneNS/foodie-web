import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./sections/Sidebar";

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
    </div>
  )
}