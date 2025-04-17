import React from 'react';

const Home = () => {
  return (
    <div className="text-white w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-20 gap-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
          Hey, I am Farhan
        </h1>
        <p className="text-base md:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam corrupti saepe laborum iusto atque ipsam cum molestiae.
        </p>
        <button className="self-start text-white border border-white rounded-3xl font-semibold text-sm md:text-lg px-6 py-2 hover:opacity-85 duration-300 hover:scale-105 bg-blue-500">
          Contact me
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="./Images/QSM_8634.JPG" 
          alt="Profile picture of Farhan" 
          className="rounded-md w-full max-w-sm h-auto object-cover border border-amber-100"
        />
      </div>
    </div>
  );
};

export default Home;
