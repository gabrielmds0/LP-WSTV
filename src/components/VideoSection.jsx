import React, { useState } from 'react';

const VideoSection = ({ scrollToRegister }) => {
  const [showVideo, setShowVideo] = useState(false);
  // Your actual YouTube video ID
  const videoId = "ukMw6lcVcvs";
  
  // YouTube thumbnail URLs - using maxresdefault for highest quality
  const maxresThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const sdThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`; // Fallback if maxres is not available
  
  const handleThumbnailClick = () => {
    setShowVideo(true);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Metodologia</h2>
          <p className="text-lg text-gray-700">
            Assista ao vídeo abaixo para entender como o método RPP pode transformar sua prática clínica e aumentar sua confiança no atendimento ao paciente grave.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
          {!showVideo ? (
            <div 
              className="relative cursor-pointer" 
              onClick={handleThumbnailClick}
            >
              {/* High resolution thumbnail with fallback */}
              <img 
                src={maxresThumbnailUrl}
                alt="Workshop Sala Vermelha" 
                className="w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = sdThumbnailUrl;
                }}
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                title="Workshop Sala Vermelha"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <button onClick={scrollToRegister} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Quero participar do workshop
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;