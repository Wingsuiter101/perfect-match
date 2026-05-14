"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const columns = [
  {
    num: "01",
    title: "Tone & Genre",
    body: [
      "Romantic Drama with light humor.",
      "Realistic, grounded, emotionally raw.",
      "Gritty indie — not glossy Bollywood.",
      "The film captures the messy, complicated truth of modern relationships.",
    ],
  },
  {
    num: "02",
    title: "Visual Style",
    body: [
      "Natural lighting. Real locations.",
      "Real bus scenarios with real crowds.",
      "Minimal cinematic exaggeration.",
      "Non-linear structure — present and flashback.",
      "Experimental visual storytelling.",
    ],
  },
  {
    num: "03",
    title: "Why This Film?",
    body: [
      "Modern relationships are confusing.",
      "Everyone talks but few connect.",
      "Voice for almost-relationships & situationships.",
      "The audience leaves remembering their past or present loved ones.",
    ],
  },
];

export default function ToneSlide() {
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
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="label"
        style={{ marginBottom: isWide ? 48 : 28 }}
      >
        Tone, Style & Why
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "repeat(3, minmax(0, 1fr))" : "1fr",
          gap: 0,
        }}
      >
        {columns.map((col, i) => (
          <motion.div
            key={col.num}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.12,
              ease: easeOutSoft,
            }}
            style={{
              padding: isWide ? "0 24px 0 0" : "20px 0 24px",
              borderRight: isWide && i < columns.length - 1 ? "1px solid var(--border)" : "none",
              borderBottom: !isWide && i < columns.length - 1 ? "1px solid var(--border)" : "none",
              paddingRight: isWide ? 40 : 0,
              paddingLeft: isWide && i > 0 ? 40 : 0,
            }}
          >
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: isWide ? 60 : 44,
                color: "rgba(201,169,110,0.12)",
                lineHeight: 1,
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              {col.num}
            </p>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 400,
                fontFamily: "DM Serif Display, Georgia, serif",
                color: "var(--text)",
                marginBottom: 20,
              }}
            >
              {col.title}
            </h3>
            <div
              style={{
                width: 24,
                height: 1,
                background: "var(--accent)",
                marginBottom: 20,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.body.map((line) => (
                <p
                  key={line}
                  style={{
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
