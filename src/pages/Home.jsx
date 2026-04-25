import React, { useEffect, useState } from "react";
import Top from "../components/Navbar/Top";
import Left from "../components/Navbar/Left";
import Right from "../components/Navbar/Right";
import Bottom from "../components/Navbar/Bottom";
import "./Home.css";
import Loading from "../components/Loading";
import { motion } from "motion/react";

const Home = () => {
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
    <div className="w-full h-screen relative bg">
      <div className="snow-container">
        <div className="snow-layer"></div>
        <div className="snow-layer layer-2"></div>
        <div className="snow-layer layer-3"></div>
      </div>

      <div className="navigation z-6">
        <Top />
        <Left />
        <Right />
        <Bottom />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-black dark:text-white md:text-2xl text-lg">PRASANNA R</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;