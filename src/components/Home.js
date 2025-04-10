import React from 'react';
import DecryptedText from './DecryptedText';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen sm:mt-12">
      <div className="flex flex-col justify-center items-start p-4 w-full md:w-1/2 bg-black bg-opacity-50 text-white">
        <h1 className="text-2xl md:text-4xl font-poppin">
          <div style={{ marginTop: '4rem' }}>
            <DecryptedText
              text="WELCOME"
              animateOn="view"
              revealDirection="center"
              speed={50} // Faster updates (50ms between changes)
              maxIterations={3} // Quick reveal after 3 scrambles
            />
          </div>
          <br />
          I'm{' '}
          <DecryptedText
            text="Alex Nasiali"
            animateOn="view"
            revealDirection="center"
            speed={50}
            maxIterations={3}
          />
          <br />
          <p className="text-lg md:text-2xl">
            <DecryptedText
              text="FULLSTACK DEVELOPER"
              animateOn="view"
              revealDirection="center"
              speed={50}
              maxIterations={3}
            />
          </p>
          <DecryptedText
            text="From Nairobi, Kenya"
            animateOn="view"
            revealDirection="center"
            speed={50}
            maxIterations={3}
          />
        </h1>
        <a href="/path-to-your-resume.pdf" download="resume.pdf">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get Resume
  </button>
</a>
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