"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const vibes = [
  { label: "Indie Acoustic", desc: "Raw guitar-driven melodies as the emotional spine" },
  { label: "Electronic Textures", desc: "Subtle layers mirroring unspoken tension" },
  { label: "Intimate Scoring", desc: "Quiet moments amplified without exaggeration" },
  { label: "Original Song", desc: "One purpose-written track anchoring the narrative" },
];

export default function MusicSlide() {
  const isWide = useMediaQuery("(min-width: 900px)");
  const twoVibes = useMediaQuery("(min-width: 480px)");

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
        style={{ marginBottom: 48 }}
      >
        Music & Sound
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1.4fr 1fr" : "1fr",
          gap: isWide ? 72 : 40,
          alignItems: "start",
        }}
      >
        {/* Left — description */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: "clamp(30px, 3.7vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: 24,
              color: "var(--text)",
            }}
          >
            An indie acoustic vibe —<br />
            <span style={{ color: "var(--accent)" }}>raw, emotional,</span>{" "}
            intimate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 440,
            }}
          >
            One original song + full background scoring. Acoustic guitar-driven
            melodies with subtle electronic textures to mirror the emotional
            journey of Prajwal and Ishani through longing, connection, and loss.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: twoVibes ? "1fr 1fr" : "1fr",
              gap: 16,
            }}
          >
            {vibes.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.28 + i * 0.08,
                  ease: easeOutSoft,
                }}
                style={{
                  borderLeft: "1px solid var(--border)",
                  paddingLeft: 14,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {v.label}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — team */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutSoft }}
          style={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          {[
            {
              role: "Music Director",
              name: "Ruben Thapa",
              handle: "@ruben10universe",
            },
            {
              role: "Production Studio",
              name: "KoKaa Music",
              handle: "@kokaamusic",
            },
          ].map((person, i) => (
            <div
              key={person.name}
              style={{
                padding: "24px 0",
                borderBottom: i === 0 ? "1px solid var(--border)" : "none",
              }}
            >
              <p className="label" style={{ marginBottom: 10 }}>
                {person.role}
              </p>
              <p
                style={{
                  fontFamily: "DM Serif Display, Georgia, serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {person.name}
              </p>
              <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                {person.handle}
              </p>
            </div>
          ))}

          <div style={{ paddingTop: 24 }}>
            <p className="label" style={{ marginBottom: 8 }}>
              Budget Allocation
            </p>
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: 24,
                color: "var(--text)",
              }}
            >
              NPR 90,000
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
              Song composition + background score licensing
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
