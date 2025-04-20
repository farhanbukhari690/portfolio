import React from 'react';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="text-white w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-20 gap-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:[0,1,0]     
        }}
        transition={{duration:2,
          repeat:Infinity
        }}
        className="text-3xl md:text-6xl text-yellow-500 font-bold leading-tight tracking-tighter">
          Hey, I am Farhan Bukhari
        </motion.h1>
        <p className="text-base text-sm md:text-lg">
        I'm a frontend developer with a solid understanding of modern web technologies and a passion for building clean, responsive user interfaces. I enjoy turning ideas into functional, user-friendly websites using tools like HTML, CSS, JavaScript, and frameworks like React . While my main focus is on frontend development, I also have a basic understanding of backend technologies and databases.
        </p>
        <button className="self-start text-white border border-white rounded-3xl font-semibold text-sm md:text-lg px-6 py-2 hover:opacity-85 duration-300 hover:scale-105 bg-blue-500">
          Contact me
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="./Images/1708170129605.jpg" 
          alt="Profile picture of Farhan" 
          className="rounded-md w-full max-w-sm h-auto object-cover border border-amber-100"
        />
      </div>
    </div>
  );
};

export default Home;
