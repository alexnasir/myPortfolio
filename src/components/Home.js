import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen sm:mt-12">
      <div className="flex flex-col justify-center items-start p-4 w-full md:w-1/2 bg-black bg-opacity-50 text-white">
        <h1 className="text-2xl md:text-4xl">
          <span className="text-yellow-400">WELCOME</span>
          <br />
          I'm <span className="text-yellow-400">Alex</span> Nasiali
          <br />
          <p className="text-lg md:text-2xl">FULLSTACK DEVELOPER</p>
          From Nairobi, Kenya
        </h1>
      </div>
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center sm:h-10"
        style={{
          backgroundImage: `url('./IMG_20240601_124522_2 (2).jpg')`, 
        }}
      ></div>
    </div>
  );
};

export default Home;