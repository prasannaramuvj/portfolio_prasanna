import React from 'react'
import { motion } from "motion/react"

const Top = () => {

  const Backbtn = ()=>(
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"/></svg>
  )
  
  return (
    <>
    <motion.div
      className='top'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
        <ul className='flex p-4 justify-between'>
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          ><i className='title'>PR</i></motion.li>
          <motion.li
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
          <button className='cursor-pointer transition duration-300 hover:scale-110'>
            <Backbtn/>
          </button>
          </motion.li>
          <motion.li
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
          <a href="mailto:prasannaramu2004@gmail.com" className='cursor-pointer transition duration-300 hover:scale-110 titles'>
            Say hi..
            </a>
          </motion.li>
        </ul>
    </motion.div>
    </>
  )
}

export default Top