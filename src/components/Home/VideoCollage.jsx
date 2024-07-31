import React, { useEffect } from 'react';
import Section from '../Section';

const VideoCollage = () => {
  const videos = [
    {
      id: 1,
      src: 'https://cdn.pixabay.com/video/2020/09/13/49813-458438871_large.mp4', // Replace with your video URL or path
      alt: 'Video 1'
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/video/2016/09/22/5631-183849543_tiny.mp4', // Replace with your video URL or path
      alt: 'Video 2'
    }
  ];

  useEffect(() => {
    // Ensure the videos start playing automatically after mounting
    document.querySelectorAll('video').forEach((video) => {
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    });
  }, []);

  return (
    <Section>
      <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="relative w-[70%] h-[70vh]">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute w-full h-[60%] shadow-lg rounded-lg overflow-hidden ${index === 0 ? 'top-0' : 'bottom-0'} transform ${index === 0 ? '-translate-y-1/4' : 'translate-y-1/4'}`}
            style={{ zIndex: index === 0 ? 10 : 5 }}
          >
            <video
              src={video.src}
              alt={video.alt}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </Section>
  );
};

export default VideoCollage;
