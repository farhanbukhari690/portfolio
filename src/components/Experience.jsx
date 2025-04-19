import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React(50%)', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'WordPress(60%)', icon: <FaWordpress className="text-blue-700" /> },
  { name: 'Node.js (Basic)', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Express (Basic)', icon: <SiExpress className="text-gray-600" /> },
  { name: 'MongoDB (Basic)', icon: <SiMongodb className="text-green-500" /> },
];

const Experience = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 text-white" id="experience">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 animate-pulse">My Experience</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition duration-300 hover:bg-gray-700"
            >
              <div className="text-5xl mb-3 animate-bounce">{skill.icon}</div>
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
