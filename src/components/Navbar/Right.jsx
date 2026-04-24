import React from 'react'
import { motion } from "motion/react"

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
        className='rotate-90 text-lg lg:text-2xl'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className='transition duration-300 hover:scale-110'>Feast</h2>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Right