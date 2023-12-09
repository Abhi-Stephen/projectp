// Projects.js
import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Hersheys',
    thumbnail: 'HERSHEY.jpg', // Update with the correct local path
    description: 'A brief description of Project 1.',
    link: 'https://github.com/topics/hershey',
    details:
    "Analyzed and comprehended business processes, focusing on SAP SD, Order-to-Cash flows (from sales order to billing), and possess fundamental knowledge of other SAP modules, including SAP MM.\nInvolved in Creating Tosca Automated test cases, designing test cases Execution, generating and sharing report with Stakeholders, analyzing reports as well as defect logging in Qtest.\nCreated new Reusable test steps blocks (RTBs).\nLinking the Test case with Excel sheet to read and write data.\nImplemented TOSCA concepts like Libraries, Reusable test step blocks (RTB), Loops (If, While and Do-While), Dynamic wait, conditional statements, Templates, Date, and Math & Random Functions.\nMaintained test scripts by executing and updating them in each sprint, while also reviewing and providing feedback on automated scripts developed by team members.",
  },
  {
    id: 2,
    title: 'IOT',
    thumbnail: 'IOT.jpeg', // Update with the correct local path
    description: 'A brief description of Project 2.',
    link: 'https://github.com/topics/iot-project',
    details: "Designed and implemented a temperature application sensor as part of an IoT workshop, showcasing my proficiency in sensor integration and IoT technology.\nInvolved in the selection and calibration of temperature sensors, interfacing with microcontrollers, and leveraging wireless communication protocols for real-time data transmission.",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-md shadow-md cursor-pointer">
            <img
              src={process.env.PUBLIC_URL + project.thumbnail}
              alt={project.title}
              className="mb-4 rounded-md w-full h-40 object-cover"
              onClick={() => openModal(project)}
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Modal for detailed project information */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-2xl overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={process.env.PUBLIC_URL + selectedProject.thumbnail}
              alt={selectedProject.title}
              className="mb-4 rounded-md w-full h-40 object-cover"
            />
            <div className="bg-blue-100 p-6 rounded-md mb-4">
              <ul className="list-decimal text-gray-600">
                {selectedProject.details.split('\n').map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Project
            </a>
            <button className="ml-4 text-gray-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
