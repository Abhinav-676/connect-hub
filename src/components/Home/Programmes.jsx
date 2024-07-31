import React from 'react';
import Section from '../Section';

const Programmes = () => {
  const cards = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/close-up-still-life-hard-exams_23-2149314021.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
      title: 'Education',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/life-insurance-concept-with-copy-space_23-2149191403.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
      title: 'Health',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/sideways-pink-female-paper-figure-copy-space_23-2148756663.jpg?t=st=1722151026~exp=1722154626~hmac=51f258b77a1bd2ace6a6a7ad4771cbf969e04bbf171b0af0b35bde4b93d794eb&w=1060',
      title: 'Human Empowerment',
    },
    {
      id: 4,
      image: 'https://img.freepik.com/free-photo/flat-lay-paper-planet-with-animals-animal-day_23-2148668915.jpg?t=st=1722151147~exp=1722154747~hmac=b86c62036a191c7c4790209b00b840d0cdd73bdeba152727744a109b896bfea1&w=740',
      title: 'Environment Conservation',
    },
  ];

  return (
    <>
    <Section>
      <div className='text-center text-gray-900 font-semibold text-4xl mb-12'>Our Programmes</div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-4">
              <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1 text-center text-gray-900">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Section>
    </>
  );
};

export default Programmes;
