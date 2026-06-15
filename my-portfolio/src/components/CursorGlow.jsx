import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  // Set up motion values
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Smooth the movement with physics-based springs
  const springConfig = { damping: 45, stiffness: 350, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch screens (coarse pointer)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    // Disable if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      // Offset by half of the glow diameter (200px) to center it on the cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-10 h-[400px] w-[400px] rounded-full bg-accent/25 opacity-60 blur-[100px]"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}

export default CursorGlow;
