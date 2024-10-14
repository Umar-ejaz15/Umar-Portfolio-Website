import React from "react";
import Navbar from "./components/Navbar";
import HomePages from "./Pages/HomePages";
import Body from "./components/Body";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Body />
      <Analytics />
    </>
  );
};

export default App;
