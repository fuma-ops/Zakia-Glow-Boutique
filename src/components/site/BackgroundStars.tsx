import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function BackgroundStars() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static random stars on client initially to avoid hydration mismatch
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 6, // 6px to 18px
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-gold"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 90],
            filter: [
              "drop-shadow(0 0 2px rgba(212,175,55,0.2))",
              "drop-shadow(0 0 10px rgba(212,175,55,1))",
              "drop-shadow(0 0 2px rgba(212,175,55,0.2))"
            ]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          {/* Simple 4-point star SVG for 3D neon glow look */}
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
