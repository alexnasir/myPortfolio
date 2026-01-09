import React from 'react';
import DecryptedText from './DecryptedText';

const Home = () => {
const cvUrl = 'alexnasialiCV.pdf';

const handleClick = () => {
   window.open(cvUrl, '_blank');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen sm:mt-12">
      <div className="flex flex-col justify-center items-start p-4 w-full md:w-1/2 bg-black bg-opacity-50 text-white">
        <h1 className="text-2xl md:text-4xl font-poppin">
          <div style={{ marginTop: '4rem' }}>
            <DecryptedText
              text="HELLO 👋"
              animateOn="view"
              revealDirection="center"
              speed={50} 
              maxIterations={3}
            />
          </div>
          <br />
          I'm{' '}
          <DecryptedText className="text-blue-500"
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
    

<button
  onClick={handleClick}
  className="px-6 py-3 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 transition-colors duration-300"
>
  Get Resume
</button>
       
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