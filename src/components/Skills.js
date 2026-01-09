import React, { useRef, useEffect, useState } from 'react';

const Skills = () => {
  const frontendSkills = [
    {
      title: 'HTML',
      description: 'Semantic and accessible layouts.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS',
      description: 'Responsive and modern designs using semantic and Tailwind css.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      description: 'Dynamic and interactive features.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg',
    },
    {
      title: 'TypeScript',
      description: 'Typed superset of JavaScript for scalable apps.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg',
    },
    {
      title: 'Next.js',
      description: 'React framework for server-side rendering and static websites.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-original.svg',
    },
  
    
    {
      title: 'React',
      description: 'Building full-stack applications using React.js & Next.js.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg',
    },
  ];

  const backendSkills = [
    {
      title: 'Node.js',
      description: 'RESTful APIs and server logic.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg',
    },
    {
      title: 'Python',
      description: 'Flask development.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
    },
    {
      title: 'PHP',
      description: 'Server-side scripting language for web development.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/php/php-original.svg',
    },
    {
      title: 'Databases',
      description: 'MySQL and PostgreSQL management.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
    },
    {
      title: 'Tools',
      description: 'Git,Figma,Postman.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/figma/figma-original.svg',
    },
    
  ];

  const otherSkills = [
    {
      title: 'Soft-Skills',
      description: 'Communication,Entrepreneurship, Teamwork and Adaptability.',
      iconUrl: null,
    },
    {
      title: 'Agile Project Management',
      description: 'Jira,Git Collabration and Trello methodologies.',
      iconUrl: null,
    },
    {
      title: 'Time Management',
      description: 'Prioritization and efficient workflows.',
      iconUrl: null,
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 md:px-8 md:py-12 min-h-screen flex items-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">
          Skills
        </h1>
        <div className="space-y-12">
          {/* Frontend Section */}
          <div className="hidden md:block">
            <MarqueeSection title="Frontend Technologies" skills={frontendSkills} />
          </div>
          <div className="block md:hidden">
            <StaticSkills title="Frontend Technologies" skills={frontendSkills} />
          </div>

          {/* Backend Section */}
          <div className="hidden md:block">
            <MarqueeSection title="Backend Technologies" skills={backendSkills} />
          </div>
          <div className="block md:hidden">
            <StaticSkills title="Backend Technologies" skills={backendSkills} />
          </div>

          {/* Other Skills Section */}
          <StaticSkills title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </div>
  );
};

const MarqueeSection = ({ title, skills }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    let position = 0;
    const speed = 50;
    let lastTime = 0;

    const animate = (time) => {
      if (lastTime !== 0 && !isPaused) {
        const deltaTime = (time - lastTime) / 1000;
        position -= speed * deltaTime;
        if (position <= -container.clientWidth) {
          position += container.clientWidth;
        }
        inner.style.transform = `translateX(${position}px)`;
      }
      lastTime = time;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener('resize', () => {});
  }, [isPaused]);

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2 mb-6">
        {title}
      </h2>
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={innerRef} className="flex flex-nowrap w-[200%]">
          <div className="w-full flex flex-nowrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  {skill.iconUrl && (
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.title} icon`}
                      className="w-8 h-8"
                    />
                  )}
                  <h3 className="text-lg md:text-xl font-medium text-blue-600">{skill.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-nowrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.title + '-dup'}
                className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  {skill.iconUrl && (
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.title} icon`}
                      className="w-8 h-8"
                    />
                  )}
                  <h3 className="text-lg md:text-xl font-medium text-blue-600">{skill.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StaticSkills = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              {skill.iconUrl && (
                <img
                  src={skill.iconUrl}
                  alt={`${skill.title} icon`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              )}
              <h3 className="text-lg font-medium text-blue-600">{skill.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;