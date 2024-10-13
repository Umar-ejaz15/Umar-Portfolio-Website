import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import Navbar from "../components/Navbar";

const Projects = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var ProjectsData = [
    {
      title: "Movie App",
      description:
        "Created a movie app using React, Redux, and Redux-saga. The app allows users to search for movies, view details about each movie, and add movies to their watchlist.",
      cases: true,
      start: true,
    },
    {
      title: "Refokuss Animated Website",
      description:
        "Created a website for a client using React and Framer Motion. The website features a responsive design and includes animations for a more engaging user experience.",
      cases: true,
      start: false,
    },
    {
      title: "Store",
      description:
        "An e-commerce platform built using React and Node.js. The platform allows users to browse and purchase products, manage their cart, and checkout securely.",
      cases: true,
      start: true,
    },
    {
      title: "Significo",
      description:
        "Created a website for a client using React and Framer Motion. It features a responsive design and includes animations for a more engaging user experience.",
      cases: true,
      start: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-zinc-900 text-white relative flex flex-col min-h-screen">
        {ProjectsData.map((item, index) => (
          <React.Fragment key={index}>
            <Project count={index} data={item} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
