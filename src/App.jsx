import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { motion,useScroll } from 'motion/react'

const App = () => {
const scrollYProgress=useScroll().scrollYProgress


  return (
    <div className='bg-blue-950 h-auto w-full overflow-hidden '>
      <motion.div
      style={{scaleX:scrollYProgress,transition:0.5}}      
       className='p-1 bg-red-600 fixed top-0 w-full origin-top-left left-0'
       ></motion.div>
      <Navbar/>
      {/* <hr className='text-white m-2'/> */}
      <Home/>
      {/* <hr className='text-white m-2'/> */}
      <About/>     
    </div>
    
  )
}

export default App
