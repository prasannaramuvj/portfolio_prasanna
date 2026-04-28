// src/pages/Myskill.jsx

import React from "react";
import { motion } from "motion/react";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
import skilldata from "../data/skilldata";
import './Myskill.css'

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="bg-white p-6 rounded-xl shadow-xl flex-1 min-w-[240px] ml-9 md:ml-0"
  >
    <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
    <p className="text-gray-600 mb-4">{skill.description}</p>
    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
      {skill.subTitle}
    </h3>
    <p className="text-gray-700">{skill.technologies.join(", ")}</p>
  </motion.div>
);

const Myskill = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="navigation z-50">
        <Top />
        <Left />
      </div>

      <div className="ml-0 md:ml-20 md:mt-16 mt-0 p-6 h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row flex-wrap items-stretch gap-8"
        >
          {skilldata.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
      <div className="text-skill hidden md:flex">SKILL</div>
    </div>
  );
};

export default Myskill;