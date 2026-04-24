import React, { useEffect, useState } from "react";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
import Right from "../components/Navbar/Right";
import Bottom from "../components/Navbar/Bottom";
import "./About.css";
import Loading from "../components/Loading";
import { motion } from "motion/react";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full  bg-gray-300 h-full">
      <div className="navigation z-6">
        <Top />
        <Left />
        <Right />
        <Bottom />
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black p-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>PRASANNA R</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
