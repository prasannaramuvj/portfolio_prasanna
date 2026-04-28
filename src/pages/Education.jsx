// src/pages/Myskill.jsx

import React from "react";
import { motion } from "motion/react";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
import education from "../data/education";
import './Education.css'

const Educationcard = ({ education, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="bg-white p-6 rounded-xl shadow-xl flex-1 min-w-[240px] ml-9"
  >
    <h2 className="text-xl font-semibold mb-2">{education.college}</h2>
    <span>{education.location}</span>
    <p className="text-gray-600 mb-4">{education.course}</p>
    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
      {education.duration}
    </h3>
    <span>{education.cgpa}</span>
  </motion.div>
);

const Education = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="navigation z-50">
        <Top />
        <Left />
      </div>

      <div className="ml-0 p-6 h-screen overflow-y-auto">
  <div className="flex justify-center min-h-full items-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-8 w-full max-w-5xl py-20 md:py-0"
    >
      {education.map((edu, index) => (
        <Educationcard key={edu.id} education={edu} index={index} />
      ))}
    </motion.div>
  </div>
</div>
      
      <div className="text-skill hidden md:flex">Education</div>
    </div>
  );
};

export default Education;