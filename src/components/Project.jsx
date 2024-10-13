import React from "react";

const Project = ({ data, count, mover }) => {
  const { title, description } = data;

  return (
    <div
      onMouseEnter={() => mover(count)}
      className={`w-full min-h-[15rem] mx-auto border-b border-t border-zinc-600 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 py-6 lg:py-10 items-center hover:bg-zinc-800 hover:text-white hover:transition-all hover:duration-500 cursor-pointer`}
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold">{title}</h1>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-center">
        <div className="w-full sm:w-4/5 lg:w-2/3 flex flex-col items-center lg:items-end">
          <p className="mb-4 text-sm sm:text-base">{description}</p>
          <p className="text-sm text-bold underline text-center w-full text-blue-400">
            Click me to view project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
