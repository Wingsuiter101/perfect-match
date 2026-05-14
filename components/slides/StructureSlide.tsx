"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const acts = [
  {
    num: "I",
    label: "Setup",
    title: "The Strawberry Effect",
    sub: "Bridging the Differences",
    desc: "First encounters, organic connection, contrasting personalities revealed. The chemistry of two people who shouldn't belong together but do.",
    color: "#4a8c6f",
  },
  {
    num: "II",
    label: "Confrontation",
    title: "One Walk, Two Burdens",
    sub: "Knowing Each Other the Hard Way",
    desc: "Personal ambitions clash, emotional intimacy deepens, conflicts escalate. The weight of wanting too much from someone who can't give it yet.",
    color: "#c9a96e",
  },
  {
    num: "III",
    label: "Resolution",
    title: "The Distance Between Us",
    sub: "Perfect Match?",
    desc: "Consequences, individual growth, diverging paths, final choice. Some questions don't have answers — only directions.",
    color: "#7a6abf",
  },
];

export default function StructureSlide() {
  const isWide = useMediaQuery("(min-width: 900px)");

  return (
    <div
      className="deck-pad"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 48 }}
      >
        <p className="label" style={{ marginBottom: 8 }}>
          Story Structure
        </p>
        <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
          Non-linear storytelling — present and flashback
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "repeat(3, minmax(0, 1fr))" : "1fr",
          gap: 2,
        }}
      >
        {acts.map((act, i) => (
          <motion.div
            key={act.num}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.14,
              ease: easeOutSoft,
            }}
            style={{
              background: "var(--surface)",
              padding: "32px 28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Act number — large background */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -12,
                right: -8,
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: isWide ? 128 : 88,
                fontWeight: 400,
                color: act.color,
                opacity: 0.06,
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {act.num}
            </div>

            {/* Top accent line */}
            <div
              style={{
                width: "100%",
                height: 1,
                background: act.color,
                opacity: 0.6,
                marginBottom: 20,
              }}
            />

            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: act.color,
                marginBottom: 16,
              }}
            >
              Act {act.num} — {act.label}
            </p>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 400,
                fontFamily: "DM Serif Display, Georgia, serif",
                color: "var(--text)",
                lineHeight: 1.3,
                marginBottom: 8,
              }}
            >
              {act.title}
            </h3>
            <p
              style={{
                fontSize: 12,
                fontStyle: "italic",
                color: "var(--text-muted)",
                marginBottom: 20,
              }}
            >
              {act.sub}
            </p>

            <div
              style={{
                width: 20,
                height: 1,
                background: act.color,
                opacity: 0.5,
                marginBottom: 16,
              }}
            />

            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {act.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
