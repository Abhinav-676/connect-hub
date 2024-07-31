import React, { useEffect } from 'react';

const VideoCollage = () => {
  const videos = [
    {
      id: 1,
      src: 'https://videocdn.cdnpk.net/videos/b4c78911-732d-4936-b328-31c51f1e4a92/horizontal/previews/clear/large.mp4?token=exp=1722439570~hmac=65f7f11658aabe8fbd39837ab0afaf592e5ca2928f591c6421835f329db23755', // Replace with your video URL or path
      alt: 'Video 1'
    },
    {
      id: 2,
      src: 'https://videocdn.cdnpk.net/videos/a6cd3435-2e40-4fc5-916a-7cb521c5c678/horizontal/previews/clear/large.mp4?token=exp=1722440050~hmac=8564f8659efcd9f584524c9736d9494d178995a6a23c020d925408f313a0920f', // Replace with your video URL or path
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
