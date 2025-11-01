import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import your logos
import logo1 from "./../assets/logoipsum-254.png";
import logo2 from "./../assets/logoipsum-257.png";
import logo3 from "./../assets/logoipsum-261.png";

const FooterWithLogos = () => {
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

  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  return (
    <div style={{ 
      backgroundColor: '#000000',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .logo-strip-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-strip-item:hover {
          transform: translateY(-2px);
        }
        
        .logo-strip-image {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0.7;
        }
        
        .logo-strip-item:hover .logo-strip-image {
          transform: scale(1.05);
          opacity: 1;
        }

        .social-icon {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>
      
      {/* Scrolling Logos Section */}
      <div style={{ 
        overflow: 'hidden',
        width: '100%'
      }}>
        <div 
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#1a1a1a',
            width: '100%',
            padding: '1rem 0',
            margin: 0
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
                  padding: '0.75rem 2rem',
                  minWidth: '150px',
                  borderRight: index < duplicatedLogos.length - 1 ? '1px solid #333333' : 'none'
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="logo-strip-image"
                  style={{ 
                    maxHeight: '32px',
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

      {/* Footer Content Section - No gap between sections */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        padding: '2rem 4rem',
        gap: '2rem',
        backgroundColor: '#151414ff',
        borderTop: 'none', // Remove border top
        marginTop: 0 // Ensure no margin
      }}>
        {/* Social Icons - Left */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'flex-start'
        }}>
          <div
            className="social-icon"
            onMouseEnter={() => setHoveredIcon('instagram')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <svg 
              style={{ 
                width: '20px', 
                height: '20px', 
                fill: hoveredIcon === 'instagram' ? '#E4405F' : '#ffffff',
                transition: 'fill 0.3s ease'
              }} 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>

          <div
            className="social-icon"
            onMouseEnter={() => setHoveredIcon('facebook')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <svg 
              style={{ 
                width: '20px', 
                height: '20px', 
                fill: hoveredIcon === 'facebook' ? '#1877F2' : '#ffffff',
                transition: 'fill 0.3s ease'
              }} 
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>

          <div
            className="social-icon"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <svg 
              style={{ 
                width: '20px', 
                height: '20px', 
                fill: hoveredIcon === 'linkedin' ? '#0077B5' : '#ffffff',
                transition: 'fill 0.3s ease'
              }} 
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>

        {/* Center Text */}
        <div style={{
          textAlign: 'center',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '400',
          letterSpacing: '0.5px'
        }}>
          Lorem Ipsum Lorem ipsum
        </div>

        {/* Copyright - Right */}
        <div style={{
          textAlign: 'right',
          color: '#888888',
          fontSize: '13px',
          fontWeight: '400'
        }}>
          © TechwareLab copyrights
        </div>
      </div>
    </div>
  );
};

export default FooterWithLogos;