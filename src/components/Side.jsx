import React from "react";

const Side = () => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="p-2 font-bold bg-zinc-900 w-full h-auto items-center flex flex-col justify-between hover:border-[2px] hover:border-white text-center text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300">
        Projects!
      </div>
      <div className="p-8 bg-zinc-900 w-full h-full flex flex-col justify-between  gap-7  hover:border-[2px] hover:border-white text-center items-center text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300">
        <div className="flex justify-between w-full">
          <h1>Now</h1>
          <div className="animate-spin text-green-500 text-2xl">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>{" "}
        <div><h1 className="text-left text-xl text-white/80 ">What's That</h1>
        <p className="text-left">Currently working as freelancer</p></div>
      </div>
    </div>
  );
};

export default Side;
