import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      image: "./Images/cartoon.jpeg",
      title: "Tic Tac Toe",
      type: "JavaScript",
      source: "https://github.com/farhanbukhari690/TicTacToe"
    },
    {
      image: "./Images/cartoon.jpeg",
      title: "Weather App",
      type: "React",
      source: "#"
    },
    {
      image: "./Images/cartoon.jpeg",
      title: "Todo App",
      type: "JavaScript",
      source: "#"
    }
  ];

  return (
    <section className='text-white p-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-blue-900'>
      <h1 className='text-3xl font-bold text-center mb-10'>My Projects</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className='bg-blue-500 rounded-lg p-4 w-72 shadow-lg text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className='h-48 w-full object-cover rounded mb-4'
            />
            <h2 className='text-2xl font-bold mb-1'>{project.title}</h2>
            <h3 className='text-yellow-300 font-semibold mb-3'>{project.type}</h3>
            <a href={project.source} target='_blank' rel='noopener noreferrer'>
              <button className='bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition'>
                Source Code
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
