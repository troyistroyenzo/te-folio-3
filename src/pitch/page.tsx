// src/pitch/page.tsx
import { FC, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PitchPage: FC = () => {
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(1);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Create intersection observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when slide is 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slideNumber = Number(entry.target.getAttribute('data-slide'));
          setCurrentSlide(slideNumber);
        }
      });
    }, options);

    // Observe all slide elements
    slidesRef.current.forEach(slide => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach(slide => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  const slides = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="bg-black">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Slide counter */}
      <motion.div 
        className="fixed top-4 right-4 text-white z-50 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-yellow-400">{currentSlide}</span>
        <span className="opacity-50">/14</span>
      </motion.div>

      {/* Slides */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {slides.map((slideNumber) => (
          <motion.section
            key={slideNumber}
            ref={el => slidesRef.current[slideNumber - 1] = el}
            data-slide={slideNumber}
            className="snap-start h-screen w-full relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={`/src/assets/images/${slideNumber}.jpg`}
                alt={`Slide ${slideNumber}`}
                className="w-full h-full object-contain"
                loading={slideNumber === 1 ? "eager" : "lazy"}
              />
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {slides.map((slideNumber) => (
          <motion.div
            key={slideNumber}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === slideNumber ? 'bg-yellow-400 w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              const element = slidesRef.current[slideNumber - 1];
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default PitchPage;