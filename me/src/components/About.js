import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-slate-200">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 m-10">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 mt-2">
          <img
            src="../IMG_20240601_124522_2 (2).jpg"
            alt="Descriptive alt text"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6">
            With a strong background of four years in computer studies and a
            passion for web development, I am currently pursuing a course for
            my full stack developer career. I enjoy creating efficient,
            responsive, and user-friendly applications by working with my
            acquired skills. My goal is to continually expand my skill set,
            stay up-to-date with the latest industry trends, and deliver
            high-quality solutions that solve real day-to-day operations.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Education
              </h2>
              <ul className="list-none">
                <li>
                  <span className="font-bold">2024 SEP to present</span>
                  <br />
                  Moringa School
                </li>
                <li>
                  <span className="font-bold">2020-2023</span>
                  <br />
                  Lumakanda High School
                </li>
                <li>
                  <span className="font-bold">2011-2019</span>
                  <br />
                  Lugala Primary School
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;