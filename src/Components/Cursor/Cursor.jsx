import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if viewport is desktop
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (e) => {
      if (isDesktop) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    >
      <div
        className="absolute w-50 h-50 md:w-80 md:h-80 bg-red-600/20 rounded-full blur-3xl transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
