import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Right = () => {
  return (
    <>
    <motion.div
      className="right"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div
        className='rotate-90 text-lg lg:text-2xl flex flex-cols justify-center gap-15 '
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <Link to="/experience">
        <h2 className='transition duration-300 hover:scale-110'>Experience</h2>
        </Link>
         <Link to="/education">
        <h2 className='transition duration-300 hover:scale-110'>Education</h2>
        </Link>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Right