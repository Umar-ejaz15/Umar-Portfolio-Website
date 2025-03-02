  import { motion } from "framer-motion";
  import {
    FaSpinner,
    FaBriefcase,

    FaFileAlt,
 
    FaUserTie,
    FaCode,
    FaDatabase,
    FaServer,
    FaMobileAlt,
    FaGraduationCap,

    FaClock,
  } from "react-icons/fa";

  const Side = () => {
  
    

    return (
      <div className="flex flex-col gap-3 h-full">
        <div className="p-5 sm:p-4 bg-white dark:bg-[#18181b] w-full h-full flex flex-col gap-6 sm:gap-8 hover:border-[1px] hover:border-blue-600 dark:hover:border-white text-center items-center text-xl sm:text-2xl border-[1px] border-transparent rounded-lg transition-all duration-300 ">
          <div className="flex items-center justify-between w-full">
            <FaUserTie className="text-blue-600 text-3xl" />
            <h1 className="flex items-center text-xl gap-2 font-semibold text-gray-900 dark:text-white">
              <span>Why Work With Me? 🤔</span>
            </h1>
            <FaSpinner className="animate-spin text-green-500 w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="w-full space-y-6">
            <div>
              <div className="text-left text-base sm:text-lg text-gray-600 dark:text-zinc-300 space-y-4">
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  Let's be real... Finding a good developer is like finding a decent show after Game of Thrones ended (yeah, it's tough). You need someone who actually knows what they're doing—someone who won't ghost you, overcomplicate things, or burn your budget on unnecessary fluff. Well, good news—you just found that developer.
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  🔹 I BUILD SOLUTIONS, NOT JUST CODE. Your project isn't just "another job" for me. I treat it like my own. Every line of code I write is focused on making your business faster, stronger, and more profitable.
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  🔹 COMMUNICATION THAT DOESN'T SUCK. You'll never wonder, "What's the status?" because I keep things clear, transparent, and to the point. (Also, I reply fast—like, really fast.)
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  🔹 AFFORDABLE, BUT NOT CHEAP. You'll find freelancers charging rock-bottom prices, but let's be honest—cheap work ends up costing more in the long run. I deliver high-quality work at a rate that makes sense. No surprises, no hidden fees.
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  🔹 I FIX MESSES. Have a broken app? Code that looks like it was written by a sleep-deprived raccoon? I clean up disasters and make things run smoothly.
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  💡 Bottom line: If you want a developer who gets it—someone who delivers quality, meets deadlines, and makes your life easier—you're in the right place.
                </p>
                <p className="text-lg hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-300">
                  📩 Let's talk. (Seriously, why wait?)
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  };

  export default Side;