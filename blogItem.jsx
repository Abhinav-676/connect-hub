import React, { useState } from 'react';

// Define the Blog component
const Blog = ({ image, title, description }) => {
  // State to track if the full description is shown
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the state when the button is clicked
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-4/5 max-w-5xl h-auto bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4 p-4">
      <div className="w-full md:w-1/3 h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">
          {isExpanded ? description : `${description.substring(0, 100)}...`}
        </p>
        <button
          onClick={handleReadMore}
          className="self-end bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

// Define the content array
const blogPosts = [
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    image: 'https://img.freepik.com/free-photo/amazing-tiger-nature-habitat-tiger-pose-golden-light-time-wildlife-scene-with-danger-animal-hot-summer-india-dry-area-with-beautiful-indian-tiger_475641-1523.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description:'Protecting our wildlife is essential for maintaining ecological balance. This blog post explores the various efforts and strategies in place to conserve animals in their natural habitats, ensuring they thrive for generations to come. From habitat preservation to anti-poaching measures, learn how these initiatives contribute to the well-being of countless species.',
  },
  {
    image: 'https://img.freepik.com/free-photo/herd-wild-deer-middle-lake-surrounded-by-greenery_181624-6260.jpg?ga=GA1.1.223006692.1710765573&semt=ais_user',
    title: 'Animal Conservation',
    description: 'This is the description for blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
  },
  // Add more blog posts as needed
];

// Define the BlogList component
const BlogList = () => {
  return (
    <div className="space-y-4">
      {blogPosts.map((post, index) => (
        <Blog key={index} image={post.image} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default BlogList;
