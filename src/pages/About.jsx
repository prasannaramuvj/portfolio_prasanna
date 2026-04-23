import React from 'react'
import Top from './Navbar/Top'
import Left from './Navbar/Left'
import Right from './Navbar/Right'
import Bottom from './Navbar/Bottom'
import './About.css'

const About = () => {
  return (
    <div className="w-full  bg-gray-300 h-full">
      <div className='navigation z-6'>
       <Top/>
       <Left/>
       <Right/>
       <Bottom/>
      </div>
       <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black p-5">
       <h1>PRASANNA R</h1>
  </div>
    </div>
  )
}

export default About