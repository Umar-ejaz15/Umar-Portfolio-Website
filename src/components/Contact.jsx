import React from "react";

const Contact = () => {
  return (
    <div className="p-2 bg-zinc-900 w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Let's start working together!</h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Email:</h3>
          <p className="text-lg break-words">official.umar.ejaz@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Socials:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://linkedin.com" className="text-lg hover:underline">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com" className="text-lg hover:underline">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;