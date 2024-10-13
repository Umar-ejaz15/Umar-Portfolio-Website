import React from "react";

const Buttons = ({txt}) => {
  return (
    <div>
      <button class="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-200 rounded-lg group bg-gradient-to-br from-gray-700 to-zinc-800 group-hover:from-gray-700 group-hover:to-zinc-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:focus:ring-zinc-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-zinc-800 rounded-md group-hover:bg-opacity-0">
          {txt}
        </span>
      </button>
    </div>
  );
};

export default Buttons;
