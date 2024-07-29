import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, imageUrl: 'https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493191.jpg?size=626&ext=jpg&ga=GA1.1.223006692.1710765573&semt=sph' },
    { id: 2, imageUrl: 'https://img.freepik.com/free-photo/international-day-education-illustration_23-2151101756.jpg?size=626&ext=jpg&ga=GA1.1.223006692.1710765573&semt=sph' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/indian-republic-day-celebration-digital-art-with-children_23-2151070671.jpg?size=626&ext=jpg&ga=GA1.1.223006692.1710765573&semt=sph' },
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
    <div className="relative overflow-hidden w-full h-[75vh]">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
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
  );
};

export default Carousel;
