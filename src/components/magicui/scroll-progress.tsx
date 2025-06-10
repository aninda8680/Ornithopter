import React, { useEffect, useState } from "react";

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "10px",
      zIndex: 90,
      background: "transparent"
    }}>
      <div style={{
        height: "100%",
        width: `${width}%`,
        background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
        transition: "width 0.1s"
      }} />
    </div>
  );
};

export default ScrollProgress;