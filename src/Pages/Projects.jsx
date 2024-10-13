import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import Navbar from "../components/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";

const Projects = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const params = useParams();
  const navigate = useNavigate();

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
      images: [
        "/Netflix Movie Data/1.png",
        "/Netflix Movie Data/2.png",
        "/Netflix Movie Data/3.png",
        "/Netflix Movie Data/4.png",
      ],
      link: "https://github.com/Umar-ejaz15/Netflix-Website-Using-MERN-Stack",
    },
    {
      title: "Refokuss Animated Website",
      description:
        "Created a website for a client using React and Framer Motion. The website features a responsive design and includes animations for a more engaging user experience.",
      images: [
        "/Refokuss/1.png",
        "/Refokuss/2.png",
        "/Refokuss/3.png",
        "/Refokuss/4.png",
        "/Refokuss/5.png",
        "/Refokuss/6.png",
      ],
      link: "https://github.com/Umar-ejaz15/Refokuss---designs",
    },
    {
      title: "Store",
      description:
        "An e-commerce platform . The platform allows users to browse and purchase products, manage their cart, and checkout securely.",
      images: [
        "/Estore/1.jpeg",
        "/Estore/2.jpeg",
        "/Estore/3.jpeg",
        "/Estore/4.jpeg",
      ],
      link: "https://github.com/Umar-ejaz15/Scatch-store-project",
    },
    {
      title: "Presentations and Designs",
      description:
        "Created a website for a client using React and Framer Motion. It features a responsive design and includes animations for a more engaging user experience.",
      images: [
        "/Presentations/1.jpeg",
        "/Presentations/2.jpeg",
        "/Presentations/2.5jpeg",
        "/Presentations/3.jpeg",
        "/Presentations/4.jpeg",
      ],
      link: "https://github.com/Umar-ejaz15/Animated-React-js-Web-App",
    },

    {
      title: "Significo",
      description:
        "Created a website for a client using React and Framer Motion. It features a responsive design and includes animations for a more engaging user experience.",
      images: [
        "/Significo/1.png",
        "/Significo/2.png",
        "/Significo/3.png",
        "/Significo/4.png",
        "/Significo/5.png",
        "/Significo/6.png",
        "/Significo/7.png",
        "/Significo/8.png",
        "/Significo/9.png",
      ],
      link: "https://github.com/Umar-ejaz15/Significo",
    },
  ];

  const handleProjectClick = (index) => {
    navigate(`/projects/${index}`, {
      state: { projectData: ProjectsData[index] },
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-black relative flex flex-col min-h-screen">
        {ProjectsData.map((item, index) => (
          <React.Fragment key={index}>
            <div onClick={() => handleProjectClick(index)}>
              <Project count={index} data={item} projectData={item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
