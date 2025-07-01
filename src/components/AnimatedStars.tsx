import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Star configuration: using responsive units that scale with text
const stars = [
  // Around "Global" (start of text)
  {
    left: "5%", top: "-0.4em", color: "#e879f9", size: "1.25rem", delay: "0s",
    mini: { dx: "1em", dy: "0.2em", color: "#fff0fa", size: "0.7rem", delay: "0.15s" }
  },
  // Around "Entrepreneurs" (middle of text)
  {
    left: "45%", top: "0.6em", color: "#c084fc", size: "1rem", delay: "0.7s",
    mini: { dx: "0.8em", dy: "0.3em", color: "#ffd6fa", size: "0.6rem", delay: "0.85s" }
  },
  // Around "Hub" (end of text) - left side
  {
    left: "80%", top: "-0.3em", color: "#a18fff", size: "1.5rem", delay: "1.2s",
    mini: { dx: "1.2em", dy: "0.2em", color: "#e0d7ff", size: "0.8rem", delay: "1.35s" }
  },
  // Around "Hub" (end of text) - right side
  {
    left: "95%", top: "0.5em", color: "#e879f9", size: "1.25rem", delay: "0.4s",
    mini: { dx: "0.9em", dy: "0.3em", color: "#f3e8ff", size: "0.7rem", delay: "0.55s" }
  },
  // Around "Hub" (end of text) - above
  {
    left: "88%", top: "-0.6em", color: "#c084fc", size: "1.1rem", delay: "1.7s",
    mini: { dx: "1em", dy: "0.4em", color: "#e0d7ff", size: "0.6rem", delay: "1.85s" }
  },
];

// Very subtle glow - much less intense
const glow = "0 0 1px #fffbe6";

const AnimatedStars: React.FC = () => {
  const isMobile = useIsMobile();
  
  // On mobile, show only 2 stars maximum, no glow
  const starsToShow = isMobile ? stars.slice(0, 2) : stars;
  const showGlow = !isMobile;

  return (
    <>
      {starsToShow.map((star, i) => (
        <React.Fragment key={i}>
          {/* Large star */}
          <span
            className="absolute z-20 select-none"
            style={{
              left: star.left,
              top: star.top,
              color: star.color,
              fontSize: star.size,
              textShadow: showGlow ? glow : "none",
              filter: showGlow ? "drop-shadow(0 0 1px #fffbe6)" : "none",
              animation: `star-fade-tilt 2.5s ${star.delay} infinite alternate`,
              transform: "rotate(-10deg)",
              pointerEvents: "none",
            }}
          >
            ✦
          </span>
          {/* Mini star, positioned right beside the large star (desktop only) */}
          {!isMobile && (
            <span
              className="absolute z-20 select-none"
              style={{
                left: `calc(${star.left} + ${star.mini.dx})`,
                top: `calc(${star.top} + ${star.mini.dy})`,
                color: star.mini.color,
                fontSize: star.mini.size,
                textShadow: glow,
                filter: "drop-shadow(0 0 1px #fffbe6)",
                animation: `star-fade-tilt 2.5s ${star.mini.delay} infinite alternate`,
                transform: "rotate(8deg)",
                pointerEvents: "none",
              }}
            >
              ✦
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default AnimatedStars; 