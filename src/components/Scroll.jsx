/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollTextRef = useRef(null);
  const wordRefs = useRef([]);
  const [hoveredWord, setHoveredWord] = useState(null);

  const addWordRef = (el, index) => {
    if (el) {
      wordRefs.current[index] = el;
    }
  };

  const highlightWords = [
    "automate processes",
    "gain insights", 
    "smarter experiences",
    "streamline operations",
    "personalize customer journeys",
    "leverage predictive analytics",
    "drive growth and innovation"
  ];

  const fullText = "We build cutting-edge AI solutions that help businesses automate processes, gain insights, and deliver smarter experiences. Whether you're looking to streamline operations, personalize customer journeys, or leverage predictive analytics, our AI-powered tools are designed to drive growth and innovation.";

  const renderTextWithHighlights = () => {
    let elements = [];
    let currentIndex = 0;
    let wordIndex = 0;
    
    const allWords = fullText.split(/(\s+)/);
    
    allWords.forEach((word, index) => {
      const normalizedWord = word.toLowerCase().trim();
      const isHighlightWord = highlightWords.some(highlight => 
        highlight.toLowerCase().includes(normalizedWord) || 
        normalizedWord.includes(highlight.toLowerCase())
      );

      if (isHighlightWord && word.trim() !== '') {
        const matchingHighlight = highlightWords.find(highlight => 
          highlight.toLowerCase().includes(normalizedWord) || 
          normalizedWord.includes(highlight.toLowerCase())
        );

        elements.push(
          <span
            key={`highlight-${wordIndex}`}
            ref={(el) => addWordRef(el, wordIndex)}
            className="highlight-word"
            data-word={matchingHighlight}
            onMouseEnter={(e) => handleMouseEnter(e, matchingHighlight)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            style={{
              cursor: 'pointer',
              display: 'inline',
              color: '#6b7280', 
              fontWeight: 'normal',
              transition: 'all 0.3s ease',
              whiteSpace: 'pre-wrap'
            }}
          >
            {word}
          </span>
        );
        wordIndex++;
      } else {
        elements.push(
          <span 
            key={`text-${index}`}
            ref={(el) => addWordRef(el, wordIndex)}
            onMouseEnter={(e) => handleMouseEnter(e, word)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            style={{ 
              color: '#6b7280',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'pre-wrap'
            }}
          >
            {word}
          </span>
        );
        wordIndex++;
      }
    });
    
    return elements;
  };

  const handleMouseEnter = (e, word) => {
    setHoveredWord(word);
    
    gsap.to(e.currentTarget, {
      fontWeight: 700, 
      color: '#ffffff', 
      duration: 0.2,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e) => {
    setHoveredWord(null);
    
    gsap.to(e.currentTarget, {
      fontWeight: 'normal', 
      color: '#6b7280', 
      duration: 0.2,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    gsap.fromTo(
      scrollTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scrollTextRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play reverse play reverse',
          scrub: 0.5
        }
      }
    );

    wordRefs.current.forEach((word) => {    
      if (word) {
        gsap.fromTo(
          word,
          { opacity: 0.3, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: word,
              start: 'top 90%',
              end: 'top 40%',   
              toggleActions: 'play reverse play reverse',
              scrub: 0.3
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={scrollContainerRef}
      style={{
        background: "#000000ff",
        color: "white",
        padding: "4rem 2rem",
        minHeight: "50vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{
        maxWidth: "900px",
        width: "100%",
      }}>
        <div 
          ref={scrollTextRef}
          style={{
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", 
            lineHeight: "1.6", 
            textAlign: "left",
          }}
        >
          {renderTextWithHighlights()}
        </div>
      </div>
    </section>
  );
};

export default Scroll;