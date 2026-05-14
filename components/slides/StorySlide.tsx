"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: easeOutSoft, delay },
});

export default function StorySlide() {
  const isNarrow = useMediaQuery("(max-width: 640px)");

  return (
    <div
      className="deck-pad"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        maxWidth: "min(960px, 100%)",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <motion.p {...fade(0)} className="label" style={{ marginBottom: 24 }}>
        The Story
      </motion.p>

      {/* Logline */}
      <motion.blockquote
        {...fade(0.1)}
        style={{
          fontSize: "clamp(20px, 2.7vw, 32px)",
          fontFamily: "DM Serif Display, Georgia, serif",
          fontStyle: "italic",
          lineHeight: 1.5,
          color: "var(--text)",
          borderLeft: "2px solid var(--accent)",
          paddingLeft: isNarrow ? 16 : 28,
          marginBottom: 52,
          maxWidth: 820,
        }}
      >
        "Two emotionally complex individuals from outside the valley meet in
        Kathmandu while preparing for their IELTS exams. Sharing the same bus
        ride after class, they slowly fall for each other — but differences in
        timing, personal struggles, and emotional baggage complicate their
        connection."
      </motion.blockquote>

      {/* Synopsis */}
      <motion.p
        {...fade(0.22)}
        style={{
          fontSize: 16,
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          maxWidth: 700,
          marginBottom: 52,
        }}
      >
        Perfect Match? follows Prajwal and Ishani navigating love, career
        pressure, and an uncertain future. Through bus rides, consultancy
        classes, and quiet moments in Bhaktapur, an unexpected friendship grows
        into something deeper — until family expectations and the shared
        ambition of going abroad force them to question whether their connection
        can survive life's changing demands.
      </motion.p>

      {/* The central question */}
      <motion.div {...fade(0.34)}>
        <div className="accent-line" style={{ marginBottom: 16 }} />
        <p
          style={{
            fontSize: 15,
            color: "var(--accent)",
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          Are they truly a perfect match… or just a perfect moment in each
          other's lives?
        </p>
      </motion.div>
    </div>
  );
}
