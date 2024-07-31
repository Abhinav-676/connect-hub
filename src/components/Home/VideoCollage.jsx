import React, { useEffect } from 'react';

const VideoCollage = () => {
  const videos = [
    {
      id: 1,
      src: 'https://videocdn.cdnpk.net/videos/9eeba5d1-fe70-414a-a9b8-407689dc37b2/horizontal/previews/clear/large.mp4?token=exp=1722153231~hmac=2249d3bbdd8d0cff9f4455040e0f10d5b3e00eab2cc4da4aa05aec50f1bbdbab', // Replace with your video URL or path
      alt: 'Video 1'
    },
    {
      id: 2,
      src: 'https://videocdn.cdnpk.net/videos/a94a513b-d38f-49a5-a29f-c9afe2c01638/horizontal/previews/clear/large.mp4?token=exp=1722153370~hmac=bdd013bdc2b3c4cae867aa8ce0e6a707f5274d44957517ab8ffcfc7b5914aa6d', // Replace with your video URL or path
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
  );
};

export default VideoCollage;
