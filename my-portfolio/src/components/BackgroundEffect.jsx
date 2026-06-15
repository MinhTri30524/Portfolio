import { useEffect, useState } from "react";

function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dark background base */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(194, 164, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(194, 164, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing accent blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.7]">
        {/* Blob 1: Purple Glow */}
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/50 blur-[120px]"
          style={{
            animation: "floatSlow 25s infinite alternate ease-in-out",
          }}
        />
        {/* Blob 2: Blue/Indigo Glow */}
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[120px]"
          style={{
            animation: "floatMedium 20s infinite alternate-reverse ease-in-out",
          }}
        />
        {/* Blob 3: Central subtle flow */}
        <div
          className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-900/30 blur-[140px]"
          style={{
            animation: "floatCenter 30s infinite alternate ease-in-out",
          }}
        />
      </div>

      {/* Radial overlay to dim corners slightly and keep focus on text content */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, var(--bg-base) 85%)"
        }}
      />
    </div>
  );
}

export default BackgroundEffect;
