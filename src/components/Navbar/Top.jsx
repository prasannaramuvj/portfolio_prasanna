import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Top = ({ className }) => {
  const Backbtn = () => (
    <svg
      fill="currentColor"
      width="30px"
      height="30px"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
    </svg>
  );

  return (
    <>
      <motion.div
        className={`top relative ${className || "bg-white text-black"}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ul className="flex p-4 justify-between items-center">
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <i className="title">PR</i>
          </motion.li>

          <motion.li
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/"
              className="cursor-pointer transition duration-300 hover:scale-110"
            >
              <Backbtn />
            </Link>
          </motion.li>
          {/* <button
            onClick={() => setDark(!dark)}
            className="cursor-pointer w-10 h-6 rounded-full flex items-center px-1 bg-gray-300 dark:bg-yellow-400 transition duration-300"
          >
            <motion.span
              animate={{ x: dark ? 16 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 block"
            />
          </button> */}

          <motion.li
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-3 text-dark"
          >
            <a
              href="mailto:prasannaramu2004@gmail.com"
              className="cursor-pointer transition duration-300 hover:scale-110 titles"
            >
              Say hi..
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default Top;
