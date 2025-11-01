/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const circlesRef = useRef([]);
  const timelineRef = useRef(null);

  const addCircleRef = (el, index) => {
    if (el && !circlesRef.current.includes(el)) {
      circlesRef.current[index] = el;
    }
  };

  // 🔽 Scroll Down Handler
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (timelineRef.current) timelineRef.current.kill();

    timelineRef.current = gsap.timeline();

    // Title animation
    timelineRef.current.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      0.2
    );

    // Subtitle animation
    timelineRef.current.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
      0.6
    );

    // Button animation
    timelineRef.current.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      1.0
    );

    // Circle animations
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        timelineRef.current.fromTo(
          circle,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
          1.4 + index * 0.3
        );

        gsap.to(circle, {
          scale: 1.05,
          opacity: 0.85,
          duration: 3 + index * 0.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 2.4 + index * 0.3,
        });
      }
    });

    // Parallax mouse movement
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) / 30;
      const moveY = (e.clientY - innerHeight / 2) / 30;

      circlesRef.current.forEach((circle, i) => {
        const speed = 1.2 - i * 0.2;
        gsap.to(circle, {
          x: moveX * speed,
          y: moveY * speed,
          duration: 1.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
      window.removeEventListener("mousemove", handleMouseMove);
      circlesRef.current.forEach((circle) => {
        if (circle) gsap.killTweensOf(circle);
      });
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #000000, #0a0a0f)",
        color: "white",
        padding: "0 1rem",
      }}
    >
      {/* Five-Layer Glowing Half Circles */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[
          { size: 400, blur: 1, opacity: 0.6 },
          { size: 550, blur: 2, opacity: 0.5 },
          { size: 700, blur: 3, opacity: 0.45 },
          { size: 850, blur: 4, opacity: 0.4 },
          { size: 1000, blur: 5, opacity: 0.35 },
        ].map((circle, i) => (
          <div
            key={i}
            ref={(el) => addCircleRef(el, i)}
            style={{
              position: "absolute",
              bottom: `${-200 - i * 75}px`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(168, 85, 247, ${circle.opacity}) 0%, rgba(88, 28, 135, ${
                circle.opacity / 1.5
              }) 50%, transparent 75%)`,
              opacity: 0,
              transform: "scale(0.5)",
              willChange: "transform",
              filter: `blur(${circle.blur}px)`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "bold",
            marginBottom: "2rem",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0,
          }}
        >
          Smarter Solutions
          <br />
          Powered by AI
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            color: "#d1d5db",
            marginBottom: "3.5rem",
            lineHeight: "1.6",
            maxWidth: "48rem",
            margin: "0 auto 3.5rem",
            padding: "0 1rem",
            opacity: 0,
          }}
        >
          Streamline operations, reduce costs, and scale effortlessly with our
          AI-driven tools.
        </p>

        <button
          ref={buttonRef}
          style={{
            position: "relative",
            padding: "1.25rem 2.5rem",
            background: "linear-gradient(to right, #9333ea, #4f46e5)",
            borderRadius: "9999px",
            color: "white",
            fontWeight: "600",
            fontSize: "1.125rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
            opacity: 0,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              y: -2,
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
              duration: 0.3,
              ease: "power2.out",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              y: 0,
              scale: 1,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              duration: 0.3,
              ease: "power2.out",
            });
          }}
        >
          Start A Project →
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.7,
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={handleScrollClick}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            padding: "8px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "12px",
              background: "rgba(255, 255, 255, 0.6)",
              borderRadius: "9999px",
              animation: "bounce 2s infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
