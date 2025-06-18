import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const COLORS = {
  black: "#181818",
  white: "#F8F8F8",
  gray: "#232323",
  accentGreen: "#00A64F",
  accentOrange: "#FF9800",
};

const CursorRing: React.FC = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if ("ontouchstart" in window) return;
    let mouseX = 0,
      mouseY = 0;
    let dotX = 0,
      dotY = 0,
      ringX = 0,
      ringY = 0;
    let frame: number;
    const animate = () => {
      dotX += (mouseX - dotX) * 0.28;
      dotY += (mouseY - dotY) * 0.28;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (dot.current)
        dot.current.style.transform = `translate(-50%, -50%) translate(${dotX}px,${dotY}px)`;
      if (ring.current)
        ring.current.style.transform = `translate(-50%, -50%) translate(${ringX}px,${ringY}px)`;
      frame = requestAnimationFrame(animate);
    };
    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", move);
    animate();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", move);
    };
  }, []);
  if ("ontouchstart" in window) return null;
  return (
    <>
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[100] pointer-events-none"
        style={{
          width: 38,
          height: 38,
          border: `2px solid #00A64F`,
          borderRadius: "50%",
          background: `#00A64F10`,
          transition: "border .2s",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[101] pointer-events-none"
        style={{
          width: 9,
          height: 9,
          background: "#00A64F",
          borderRadius: "50%",
          boxShadow: `0 2px 6px 1px #00A64F24`,
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <CursorRing />
      <div
        className="min-h-screen flex items-center justify-center pt-20 px-2 xs:px-0"
        style={{ background: COLORS.black }}
      >
        <div
          className="text-center p-4 xs:p-8 rounded-2xl shadow-lg w-full max-w-xs xs:max-w-md"
          style={{ background: COLORS.gray }}
        >
          <h1
            className="text-3xl xs:text-4xl font-bold mb-2 xs:mb-4"
            style={{ color: COLORS.accentOrange }}
          >
            404
          </h1>
          <p className="text-lg xs:text-xl mb-2 xs:mb-4" style={{ color: COLORS.white }}>
            Oops! Page not found
          </p>
          <a
            href="/"
            className="underline font-bold"
            style={{ color: COLORS.accentGreen }}
          >
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
