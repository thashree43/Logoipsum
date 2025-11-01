import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import your logos
import logo1 from "./../assets/logoipsum-254.png";
import logo2 from "./../assets/logoipsum-257.png";
import logo3 from "./../assets/logoipsum-261.png";

const Scrolllogo = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  const logos = [
    { id: 1, src: logo1, alt: "Logoipsum" },
    { id: 2, src: logo2, alt: "Logoipsum" },
    { id: 3, src: logo3, alt: "Logoipsum" },
  ];

  // Duplicate logos to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    // GSAP Animation
    const totalWidth = 150 * 3; 
    
    animationRef.current = gsap.to(marqueeRef.current, {
      x: -totalWidth,
      duration: 15,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 0, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 1, duration: 0.3 });
    }
  };

  return (
    <div style={{ 
      minHeight: '20vh',
      backgroundColor: '#000000', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '1rem 0',
      overflow: 'hidden',
      width: '100vw'
    }}>
      <style>{`
        .logo-strip-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-strip-item:hover {
          transform: translateY(-1px);
        }
        
        .logo-strip-image {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0.7;
        }
        
        .logo-strip-item:hover .logo-strip-image {
          transform: scale(1.03);
          opacity: 1;
        }
      `}</style>
      
      <div style={{ 
        width: '100%',
        position: 'relative'
      }}>
        {/* Infinite Horizontal Marquee with GSAP */}
        <div 
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#27272a',
            borderRadius: '0',
            padding: '0.5rem 0',
            width: '100%'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={marqueeRef}
            style={{
              display: 'flex',
              width: 'fit-content'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="logo-strip-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  minWidth: '150px',
                  borderRight: '1px solid #3f3f46'
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="logo-strip-image"
                  style={{ 
                    maxHeight: '30px',
                    maxWidth: '100px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolllogo;