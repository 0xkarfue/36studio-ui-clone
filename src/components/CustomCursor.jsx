import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 w-32 h-32"
    >
      <img
        src="https://thirtysixstudio.com/peppers/pepperA/6.png"
        alt="custom cursor"
        className="w-full h-full"
      />
    </div>
  );
};

export default CustomCursor;
