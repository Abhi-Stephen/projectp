// Skills.js
import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', proficiency: 80 },
    { name: 'SAP SD', proficiency: 75 },
    { name: 'JAVA', proficiency: 70 },
    { name: 'HTML CSS', proficiency: 90 },
    { name: 'TOSCA', proficiency: 85 },
    { name: 'C', proficiency: 60 },   
    // Add more skills as needed
  ];

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    Proficiency
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 h-2 relative">
                  <div
                    style={{ width: `${skill.proficiency}%` }}
                    className={`absolute h-full rounded-md bg-blue-700`}
                  >
                    <div
                      className={`absolute h-full rounded-md bg-blue-500`}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
