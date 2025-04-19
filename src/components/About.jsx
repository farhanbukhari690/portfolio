import React from "react";

const About = () => {
  return (
    <div className="bg-black bg-opacity-30 shadow-xl rounded-lg text-white mx-4 md:mx-20 p-6 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          className="w-full md:w-1/2 h-auto rounded-lg object-cover max-h-96"
          src="./Images/cartoon.jpeg"
          alt="About"
        />

        <ul className="w-full md:w-1/2 space-y-6">
          <li className="flex items-start gap-4">
            <span className="text-3xl font-extrabold text-blue-400">&#8594;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">👨‍💻 Frontend Development</h3>
              <p className="text-sm md:text-base text-gray-300">
              I specialize in frontend development and have hands-on experience with HTML, CSS, JavaScript, and libraries like React. I enjoy creating responsive and interactive web interfaces that work smoothly across different devices and browsers.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-3xl font-extrabold text-blue-400">&#8594;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">🛠️ Backend & Database (Basic Knowledge)</h3>
              <p className="text-sm md:text-base text-gray-300">
              I have a basic understanding of backend concepts and databases. I’ve a general idea of how data flows between the frontend and backend. I’ve explored tools like Node.js and MongoDB/MySQL in small projects.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-3xl font-extrabold text-blue-400">&#8594;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">🎨 UI/UX Design (Learning Phase)</h3>
              <p className="text-sm md:text-base text-gray-300">
              I'm currently learning the principles of UI/UX design to better understand how to design user-friendly and visually appealing interfaces. This is an area I’m actively working on improving.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
