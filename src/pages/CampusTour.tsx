import React from "react";

const campusVideos = [
  {
    title: "Campus Overview",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Classroom Tour",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Student Life",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Events & Workshops",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
];

const CampusTour: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-24 pb-16 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))] flex flex-col items-center">
      <div className="max-w-5xl w-full px-4 sm:px-8 mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
          Campus Tour
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
          Explore our campus through these cinematic videos. Click play to watch
          different aspects of Smart Preps!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {campusVideos.map((video, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg border border-[color:rgb(var(--primary))] bg-black flex flex-col items-center"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-72"
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#41644A] mb-1">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusTour;
