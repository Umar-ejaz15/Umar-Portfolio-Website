import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";
import HomePages from "./Pages/HomePages";
import About from "./Pages/About";
import LocomotiveScroll from 'locomotive-scroll';
import MouseFollow from "./components/MouseFollow";



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-full text-black ">
        <MouseFollow/>
        <Navbar />
        {/* <AppRoutes /> */}
        <HomePages />
        <About />

        <Analytics />
      </div>
    </>
  );
};

export default App;
