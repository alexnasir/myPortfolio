import React from 'react';

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full p-6 rounded-lg shadow-lg sm:hover:bg-blue-500 mt-32">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Skills & Projects
        </h1>
        {/* Frontend Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
            Frontend Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">HTML</h3>
              <p className="text-gray-600">
                Experienced in building semantic, well-structured HTML layouts
                for websites and web apps.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">CSS</h3>
              <p className="text-gray-600">
                Skilled in creating responsive and visually appealing designs
                using CSS and pre-processors like SASS.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">JavaScript</h3>
              <p className="text-gray-600">
                Proficient in JavaScript for building dynamic web applications,
                including DOM manipulation and AJAX.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">React</h3>
              <p className="text-gray-600">
                Experienced in building Fullstack applications using the
                framework for high proficiency user experience.
              </p>
            </div>
          </div>
        </div>
        {/* Backend Skills */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
            Backend Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-start">
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">Node.js</h3>
              <p className="text-gray-600">
                Experienced in building RESTful APIs and server-side
                applications using Node.js.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">Python</h3>
              <p className="text-gray-600">
                Proficient in Python for server-side scripting and API
                development, particularly with Flask.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">Databases</h3>
              <p className="text-gray-600">
                Experienced in working with databases like MySQL and
                PostgreSQL, optimizing queries, and managing data.
              </p>
            </div>
            <div className="w-full md:w-[22%] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl text-blue-600 mb-2">Other Skills:</h3>
              <ol className="text-gray-600">
                <li>Soft-Skills</li>
                <li>Project Management; agile</li>
                <li>Time Management</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;