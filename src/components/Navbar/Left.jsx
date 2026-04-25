import React from "react";
import { motion } from "motion/react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const GitIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>github</title>
    <rect width="24" height="24" fill="none" />
    <path fill="currentColor" d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="#0A66C2"
      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
    />
  </svg>
);

const Left = ({ className }) => {
  return (
    <>
      <motion.div
        className={`left flex items-center lg:gap-10 ${className || 'text-black'}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="-rotate-90 lg:-rotate-90 text-lg lg:text-2xl cursor-pointer transition duration-300 hover:scale-110"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/projects">Projects</Link>
        </motion.div>
        <div className="icon lg:mt-10">
          <ul className="flex flex-col justify-center gap-4 items-center">
            <motion.li
              className="cursor-pointer transition duration-300 hover:scale-110"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <a target="_blank" href="https://github.com/prasannaramuvj/PrasannaR"><GitIcon /></a>
            </motion.li>
            <motion.li
              className="cursor-pointer transition duration-300 hover:scale-110"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <a target="_blank" href="https://www.linkedin.com/in/prasanna-r-977b49251/overlay/contact-info/">
              <LinkedInIcon /></a>
            </motion.li>
            <motion.li className="lg:block">
              <motion.div
                className="w-[2px] h-50 bg-current z-10"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              ></motion.div>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Left;
