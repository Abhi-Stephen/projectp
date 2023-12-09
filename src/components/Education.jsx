// Education.js
import React, { useState } from 'react';

const Education = () => {
  const slides = [
    { id: 1, university: 'Saint Louis University', degree: 'Master of Science', major: 'Computer Science', graduationYear: 2025 },
    { id: 2, university: 'JNTU Hyderabad', degree: 'Bachelor of Technology', major: 'Electrical and electronics Engineering', graduationYear: 2020 },
    { id: 3, university: 'Sri Chaitanya', degree: 'Intermediate', major: 'Maths Physics Chemistry', graduationYear: 2015 },
    { id: 4, university: 'KKR Gowtham', degree: 'SSC', major: 'Maths and Science', graduationYear: 2013 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Education</h2>

      {/* Slideshow */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          &lt; Prev
        </button>

        <div className="w-2/3 border border-gray-300 p-4 rounded-md bg-indigo-200">
          <h3 className="text-xl font-bold mb-2">{slides[currentSlide].university}</h3>
          <p>Degree: {slides[currentSlide].degree}</p>
          <p>Major: {slides[currentSlide].major}</p>
          <p>Graduation Year: {slides[currentSlide].graduationYear}</p>
        </div>

        <button
          onClick={nextSlide}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Education;
