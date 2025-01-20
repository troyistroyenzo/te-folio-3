// src/pitch/page.tsx
import React, { useEffect, useState, useRef } from 'react';
import type { FC } from 'react';
import { motion, useScroll } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import Navbar from '../sections/Navbar';

const SLIDE_URLS = [
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/1_p4bxw8.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151588/2_sddkm4.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/3_kbd8zd.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/4_wd5y1w.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/5_cahagn.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/6_ytfto7.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/7_adcm7i.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/8_wndiyu.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151589/9_mt3sy7.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/10_ea9hnb.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/11_p4wsxz.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/12_xmuopk.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/13_tzgjjf.jpg',
  'https://res.cloudinary.com/dlgyqy69b/image/upload/v1736151590/14_kisqoj.jpg'
];

interface SlideProps {
  slideNumber: number;
  imageUrl: string;
  refCallback: (el: HTMLElement | null) => void;
}

const Slide: FC<SlideProps> = ({ slideNumber, imageUrl, refCallback }) => {
  return (
    <motion.section
      ref={refCallback}
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
          src={imageUrl}
          alt={`Slide ${slideNumber}`}
          className="w-full h-full object-contain"
          loading={slideNumber === 1 ? "eager" : "lazy"}
        />
      </motion.div>
    </motion.section>
  );
};

interface ProgressBarProps {
  progress: MotionValue<number>;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => (
  <motion.div 
    className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
    style={{ scaleX: progress }}
  />
);

interface SlideCounterProps {
  current: number;
  total: number;
}

const SlideCounter: FC<SlideCounterProps> = ({ current, total }) => (
  <motion.div 
    className="fixed top-4 right-4 text-white z-50 font-mono"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <span className="text-yellow-400">{current}</span>
    <span className="opacity-50">/{total}</span>
  </motion.div>
);

interface NavigationDotsProps {
  current: number;
  total: number;
  onDotClick: (slideNumber: number) => void;
}

const NavigationDots: FC<NavigationDotsProps> = ({ current, total, onDotClick }) => (
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
    {Array.from({ length: total }, (_, i) => i + 1).map((slideNumber) => (
      <motion.div
        key={slideNumber}
        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
          current === slideNumber ? 'bg-yellow-400 w-4' : 'bg-white/50'
        }`}
        onClick={() => onDotClick(slideNumber)}
        whileHover={{ scale: 1.5 }}
      />
    ))}
  </div>
);

const PitchPage: FC = () => {
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(1);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slideNumber = Number(entry.target.getAttribute('data-slide'));
          setCurrentSlide(slideNumber);
        }
      });
    }, options);

    slidesRef.current.forEach(slide => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach(slide => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  const handleDotClick = (slideNumber: number) => {
    const element = slidesRef.current[slideNumber - 1];
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      <Navbar />
      <ProgressBar progress={scrollYProgress} />
      <SlideCounter current={currentSlide} total={SLIDE_URLS.length} />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {SLIDE_URLS.map((url, index) => (
          <Slide
            key={index + 1}
            slideNumber={index + 1}
            imageUrl={url}
            refCallback={(el) => slidesRef.current[index] = el}
          />
        ))}
      </div>

      <NavigationDots
        current={currentSlide}
        total={SLIDE_URLS.length}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default PitchPage;