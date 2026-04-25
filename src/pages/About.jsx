import React from "react";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
import { motion } from "motion/react";
import "./About.css";
import profile from "../assets/profile_img.png";
import bg from '../assets/bg.jpg';
const About = () => {
  return (
    <div className="w-full min-h-screen">
      <Top />
      <Left />
      <div className="py-10 md:pl-20 pt-0 md:pt-20 md:p-5 mt-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-6 pl-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="md:w-1/2 pl-10 text-sm md:text-sm lg:text-lg p-1 text"
          >
            <p className="pb-2">
              I'm a fresher Frontend Developer with hands-on experience in React
              and Tailwind CSS. Currently leveling up my skills by diving deep
              into the MERN stack — MongoDB, Express, React, and Node.js.hhhhhh
            </p>

            <p className="pb-2">
              I'm someone who genuinely enjoys the process of learning. Whether
              it's a new framework, a design pattern, or a cool library — if
              it's new, I want to explore it.
            </p>

            <p className="pb-2">
              When I'm not coding, I'm probably reading about the latest tech
              trends or experimenting with side projects.
            </p>
          </motion.div>

          <motion.div className="w-full md:w-1/2 flex justify-center pt-5 md-pt-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}>
            <img src={profile} className="profile rounded-2" alt="Profile" />
          </motion.div>
        </motion.div>
        <div className="text_about hidden md:flex">
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default About;
