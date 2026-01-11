'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-bg">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      
      <svg
        className="floral-pattern animate-float"
        style={{ 
          top: `${10 + scrollY * 0.1}%`, 
          left: '10%',
          width: '300px',
          height: '300px'
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#D4A574"
          d="M45.7,-57.8C58.9,-49.5,69.2,-36.2,73.8,-21.2C78.4,-6.2,77.3,10.5,71.1,25.7C64.9,40.9,53.6,54.6,39.5,62.8C25.4,71,8.5,73.7,-7.8,73.1C-24.1,72.5,-39.8,68.6,-52.9,59.5C-66,50.4,-76.5,36.1,-80.8,20.1C-85.1,4.1,-83.2,-13.6,-76.3,-28.9C-69.4,-44.2,-57.5,-57.1,-43.2,-65C-28.9,-72.9,-12.3,-75.8,2.4,-79.1C17.1,-82.4,32.5,-66.1,45.7,-57.8Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="floral-pattern animate-float-slow"
        style={{ 
          top: `${50 + scrollY * 0.15}%`, 
          right: '5%',
          width: '400px',
          height: '400px'
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#C67D4A"
          d="M39.5,-54.3C51.4,-45.5,61.5,-34.2,66.8,-20.9C72.1,-7.6,72.6,7.7,68.2,21.8C63.8,35.9,54.5,48.8,42.3,57.4C30.1,66,15,70.3,-0.9,71.6C-16.8,72.9,-33.6,71.2,-46.8,63.2C-60,55.2,-69.6,40.9,-74.4,25.1C-79.2,9.3,-79.2,-8,-74.1,-23.8C-69,-39.6,-58.8,-53.9,-45.9,-62.4C-33,-70.9,-18.5,-73.6,-4.3,-68.1C9.9,-62.6,27.6,-63.1,39.5,-54.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="floral-pattern animate-float"
        style={{ 
          bottom: `${5 + scrollY * 0.08}%`, 
          left: '15%',
          width: '350px',
          height: '350px'
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#5D3A2E"
          d="M43.3,-58.5C55.9,-50.3,66.1,-37.5,71.4,-22.9C76.7,-8.3,77.1,8.1,72.3,22.9C67.5,37.7,57.5,50.9,44.7,59.8C31.9,68.7,16,73.3,0.3,72.9C-15.4,72.5,-30.8,67.1,-43.6,57.9C-56.4,48.7,-66.6,35.7,-71.8,20.9C-77,6.1,-77.2,-10.5,-72.4,-25.5C-67.6,-40.5,-57.8,-53.9,-45.1,-62C-32.4,-70.1,-16.2,-72.9,-0.7,-71.9C14.8,-70.9,30.7,-66.7,43.3,-58.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
