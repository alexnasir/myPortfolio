import React from 'react';

const About = () => {
  return (
    <div className="w-full mx-auto p-4 md:p-8 bg-slate-200">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 m-4 md:m-10">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 sm:gap-6">
  <img
    src="lex.jpg"
    alt="Alex Nasiali"
    className="w-full h-auto md:max-w-md rounded-lg shadow-md mx-auto bg-cover bg-center "
  />
</div>
        <div className="md:w-1/2">
          <p className="text-sm  md:text-base mb-6">
          I am an aspiring Fullstack Developer
with expertise and hand-on experience in building full-stack applications using HTML, CSS-Tailwind, React, JavaScript,
Flask, Python, and SQL. Passionate about building
scalable web applications, optimizing performance,
and implementing secure authentication systems.
Strong problem-solving skills, a collaborative mindset,
and experience in Agile methodologies. Open to
internship and freelance opportunities where I can
contribute technical expertise while continuing to grow
in the field.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-2">
                Education
              </h2>
              <ul className="list-none text-sm md:text-base">
                <li className='font-bold'>Certificate in Software Engineering</li>
                <li>
                  <span className="font-semibold">2024-2025</span>
                  <br />
                  Moringa School
                </li>
                <li className='font-bold'>Kenya Certificate of Secondary Education</li>
                <li>
                  <span className="font-bold">2020-2023</span>
                  <br />
                  Lumakanda High School
                </li>


                <li className='font-bold'>Kenya Certificate of Primary Education</li>
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