import React, { useState, useEffect } from 'react';

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import Section from '../Section';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, imageUrl: img1 },
    { id: 2, imageUrl: img2 },
    { id: 3, imageUrl: img3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const updateIndex = (newIndex) => {
    setCurrentIndex((newIndex + slides.length) % slides.length);
  };

  return (
    <Section className="mt-4">
      <div className="relative overflow-hidden w-full">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full object-center rounded" />
          </div>
        ))}
      </div>
      <button
        onClick={() => updateIndex(currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-100 text-black p-4 rounded"
      >
        ‹
      </button>
      <button
        onClick={() => updateIndex(currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-100 text-black p-4 rounded"
      >
        ›
      </button>
    </div>
    </Section>
  );
};

export default Carousel;
