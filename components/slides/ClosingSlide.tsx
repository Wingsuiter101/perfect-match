"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function ClosingSlide() {
  const isNarrow = useMediaQuery("(max-width: 640px)");

  return (
    <div
      className="deck-pad"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        overflow: isNarrow ? "auto" : "hidden",
        minHeight: 0,
      }}
    >
      {/* Large background PM */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -40,
          bottom: -60,
          fontFamily: "DM Serif Display, Georgia, serif",
          fontSize: "clamp(200px, 30vw, 400px)",
          fontWeight: 400,
          color: "rgba(201,169,110,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}
      >
        PM
      </div>

      {/* Opening line */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: 36,
        }}
      >
        Perfect Match? — Home Production — 2026
      </motion.p>

      {/* Main quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeOutSoft }}
        style={{
          fontFamily: "DM Serif Display, Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(22px, 3vw, 36px)",
          lineHeight: 1.5,
          color: "var(--text)",
          maxWidth: 780,
          marginBottom: 40,
        }}
      >
        "Some stories are not meant to give clear answers. Prajwal and Ishani
        meet at a time when both are searching for their own paths — carrying
        dreams, pressure, and expectations. In between bus rides, small talks,
        fights, and laughter, they find a connection that feels real. But life
        is never that simple."
      </motion.p>

      {/* The question */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28 }}
        style={{ marginBottom: 56 }}
      >
        <div className="accent-line" style={{ marginBottom: 20 }} />
        <p
          style={{
            fontSize: "clamp(17px, 2.1vw, 24px)",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.01em",
          }}
        >
          Are they truly a perfect match… or just a perfect moment in each
          other&apos;s lives?
        </p>
      </motion.div>

      {/* Footer info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          borderTop: "1px solid var(--border)",
          paddingTop: 24,
          width: "100%",
          maxWidth: 700,
        }}
      >
        {[
          ["Status", "Pre-Production"],
          ["Company", "Home Production"],
          ["Genre", "Realistic Romantic Drama"],
          ["Confidentiality", "Subject to NDA"],
        ].map(([label, val]) => (
          <div key={label}>
            <p className="label" style={{ marginBottom: 4 }}>
              {label}
            </p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{val}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
