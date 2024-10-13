import React from "react";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skillsData = [
    {
      title: "MongoDB",
      description: "NoSQL database for storing and retrieving data"
    },
    {
      title: "Express.js",
      description: "Web application framework for Node.js"
    },
    {
      title: "React",
      description: "JavaScript library for building user interfaces"
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for server-side development"
    },
    {
      title: "RESTful APIs",
      description: "Designing and implementing RESTful web services"
    },
    {
      title: "State Management",
      description: "Redux, Context API for managing application state"
    },
    {
      title: "Authentication",
      description: "JWT, OAuth for secure user authentication"
    },
    {
      title: "Responsive Design",
      description: "Creating mobile-friendly web applications"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">My MERN Stack Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;