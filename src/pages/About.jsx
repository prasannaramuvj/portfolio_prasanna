import React from 'react'
import Top from './Navbar/Top'
import Left from './Navbar/Left'
import Right from './Navbar/Right'
import Bottom from './Navbar/Bottom'

const About = () => {
  return (
    <div className="w-full  bg-gray-300 h-full">
      <nav>
       <Top/>
       <Left/>
       <Right/>
       <Bottom/>
      </nav>
    </div>
  )
}

export default About