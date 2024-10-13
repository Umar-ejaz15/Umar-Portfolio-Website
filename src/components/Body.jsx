import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "../Pages/HomePages";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import ShowProject from "../Pages/ShowProject";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePages />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/:id",
      element: <ShowProject />,
    },
    
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;