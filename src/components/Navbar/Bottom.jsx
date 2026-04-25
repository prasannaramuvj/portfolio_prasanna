import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <motion.div
      className="bottom"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <ul className='bottoms text-lg lg:text-2xl'>
        <motion.li
          className='cursor-pointer transition duration-300 hover:scale-110'
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
         <Link to="/about"><h2>About</h2></Link>
        </motion.li>
        <motion.li
          className='cursor-pointer  transition duration-300 hover:scale-110'
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
         <Link to="/myskills"><h2>Myskills</h2></Link> 
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default Bottom