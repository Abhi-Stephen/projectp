// Home.js
import React, { useState } from 'react';

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Rokkam Abhi Stephen</h1>
      
      {/* Profile Picture with Clickable Behavior */}
      <div>
        <img
          src="Picture.jpg"
          alt="Your Name"
          className="cursor-pointer rounded-full mx-auto mb-4"
          onClick={toggleDetails}
          style={{ maxWidth: '200px' }}
        />
      </div>

      {/* Welcome Message */}
      <p className="text-lg mb-4">Welcome to my portfolio! I am Abhi Stephen a Graduate student in computer science, aspiring to merge academic insights with hands-on experience to build a robust programming foundation. Focused on problem-solving and creative thinking to excel as a software developer and drive innovation in the tech sector. Moreover, have experience as a software engineer at Accenture in the field of SAP SD (Sales and Distribution) and Automation testing using Tosca.

</p>
      
      {/* Additional Details */}
      {showDetails && (
        <div className="bg-gray-100 p-4 rounded-md">
          <p>More specific information about myself or something I am interested is I find joy in playing the keyboard, showcasing my musical creativity. On weekends, you'll often find me on the cricket field, where I passionately play the sport. Additionally, I have a profound love for music, spending time listening to a diverse range of genres.and i am passionate about Exploring innovative solutions to complex problems and turning ideas into reality.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
