import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { myProjects } from '../constants/index.js';
import { useState } from 'react';


const projectCount = myProjects.length;

const Film = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const VideoEmbed = ({ videoUrl }) => {
    const getEmbedUrl = (url) => {
        if (!url) return null;
    
        // YouTube
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          const videoId = url.split('v=')[1] || url.split('/').pop();
          return `https://www.youtube.com/embed/${videoId}`;
        }
    
        // Vimeo
        if (url.includes('vimeo.com')) {
          const videoId = url.split('/').pop();
          return `https://player.vimeo.com/video/${videoId}`;
        }
    
    
        return null;
      };
    
      const embedUrl = getEmbedUrl(videoUrl);
    
      if (!embedUrl) {
        console.error('Unsupported video URL:', videoUrl);
        return null; // or return some fallback UI
      }
  
    return (
        <div className="w-full my-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">

            <iframe
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          />
          
        </div>
      </div>
    );
  };
  

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
    

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">

   
          <VideoEmbed videoUrl={currentProject.link} />
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
          </div>

          

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Film;
