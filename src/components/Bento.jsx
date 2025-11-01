import React from "react";
import logo1 from "./../assets/logoipsum-245.png";
import logo2 from "./../assets/logoipsum-325.png";
import logo3 from "./../assets/logoipsum-234.png";
import logo4 from "./../assets/logoipsum-311.png";
import logo5 from "./../assets/logoipsum-300.png";

const BentoGrid = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <style>{`
        .bento-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .bento-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        }
        
        .logo-image {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0) invert(1);
        }
        
        .bento-item:hover .logo-image {
          transform: scale(1.05);
        }
        
        .logo-text {
          transition: color 0.3s ease, letter-spacing 0.3s ease;
        }
        
        .bento-item:hover .logo-text {
          color: #d4d4d8;
          letter-spacing: 0.15em;
        }
      `}</style>

        <div style={{ width: "100%", maxWidth: "1200px" }}>
          {/* CSS Grid Layout - EXACT match to reference image */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr 1fr",
              gridTemplateRows: "280px 280px",
              gap: "1rem",
              backgroundColor: "#000000",
            }}
          >
            {/* Logo 1 - Left tall card (Diagonal stripes) - Column 1, Rows 1-2 */}
            <div
              className="bento-item"
              style={{
                gridColumn: "1 / 2",
                gridRow: "1 / 3",
                backgroundColor: "#1b1c1dff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateRows: "1fr auto",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo1}
                  alt="Logoipsum"
                  className="logo-image"
                  style={{
                    maxHeight: "140px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="logo-text"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                }}
              >
                LOGOIPSUM
              </div>
            </div>

            {/* Logo 2 - Top wide card (Main Logoipsum) - Columns 2-4, Row 1 */}
            <div
              className="bento-item"
              style={{
                gridColumn: "2 / 5",
                gridRow: "1 / 2",
                backgroundColor: "#1b1c1dff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateRows: "1fr auto",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo2}
                  alt="Logoipsum"
                  className="logo-image"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="logo-text"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                }}
              >
                LOGOIPSUM
              </div>
            </div>

            {/* Logo 3 - Bottom square 1 (Plus symbol) - Column 2, Row 2 */}
            <div
              className="bento-item"
              style={{
                gridColumn: "2 / 3",
                gridRow: "2 / 3",
                backgroundColor: "#1b1c1dff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateRows: "1fr auto",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo3}
                  alt="Logo Ipsum Plus"
                  className="logo-image"
                  style={{
                    maxHeight: "90px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="logo-text"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                }}
              >
                LOGOIPSUM
              </div>
            </div>

            {/* Logo 4 - Bottom square 2 (IPSUM text) - Column 3, Row 2 */}
            <div
              className="bento-item"
              style={{
                gridColumn: "3 / 4",
                gridRow: "2 / 3",
                backgroundColor: "#1b1c1dff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateRows: "1fr auto",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo4}
                  alt="IPSUM"
                  className="logo-image"
                  style={{
                    maxHeight: "90px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="logo-text"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                }}
              >
                LOGOIPSUM
              </div>
            </div>

            {/* Logo 5 - Bottom square 3 (Circle badge) - Column 4, Row 2 */}
            <div
              className="bento-item"
              style={{
                gridColumn: "4 / 5",
                gridRow: "2 / 3",
                backgroundColor: "#1b1c1dff",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateRows: "1fr auto",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo5}
                  alt="Logoipsum Badge"
                  className="logo-image"
                  style={{
                    maxHeight: "90px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "grayscale(1) brightness(1.5)", // Grayscale and brighten
                  }}
                />
              </div>
              <div
                className="logo-text"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                }}
              >
                LOGOIPSUM
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoGrid;
