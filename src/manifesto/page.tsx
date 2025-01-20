import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './styles.css';

const ManifestoPage = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/troy-manifesto.txt');
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading manifesto content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [isLoading]);

  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Handle h1 tags
      if (line.match(/<h1>.*<\/h1>/)) {
        const content = line.replace(/<h1>|<\/h1>/g, '');
        return (
          <h1 key={index} className="text-4xl font-bold text-white">
            {content}
          </h1>
        );
      }
      
      // Handle h2 tags
      if (line.match(/<h2>.*<\/h2>/)) {
        const content = line.replace(/<h2>|<\/h2>/g, '');
        return (
          <h2 key={index} className="text-3xl font-bold text-white">
            {content}
          </h2>
        );
      }
      
      // Handle lists
      if (line.match(/^[•-]\s/)) {
        return (
          <li key={index} className="text-neutral-300 ml-6 list-disc">
            {line.replace(/^[•-]\s/, '')}
          </li>
        );
      }
      
      // Handle normal paragraphs
      return line.trim() ? (
        <p key={index} className="text-neutral-300 text-lg">
          {line}
        </p>
      ) : <br key={index} />;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <div ref={containerRef} className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
           The Manifesto
          </h1>

        </div>

        {/* Content */}
        <div className="text-white space-y-1">
          {formatContent(content)}
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;