import { useState } from "react";

const BlogItem = ({ image, title, ngo, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
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
          <h2 className="text-xl text-gray-900 font-bold mb-2">{title}</h2>
          <p className="text-l text-gray-900 font-bold mb-2">{ngo}</p>
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

  export default BlogItem