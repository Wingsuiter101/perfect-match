"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: easeOutSoft, delay },
});

const credits = [
  "8 years in the Nepali film industry",
  "Diploma in Acting — Everest Films",
  "Associate Director — Life Damage (dir. Nimesh Shrestha)",
  "Associate Director — Jodi No.1 (dir. Siddartha Pudasaini)",
  "Creative force at Fun Revolution TV · YouTube",
  "Background in commercial direction",
];

export default function DirectorSlide() {
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
      <motion.p {...fade(0)} className="label" style={{ marginBottom: 40 }}>
        Director&apos;s Vision
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 1.6fr" : "1fr",
          gap: isWide ? 72 : 40,
          alignItems: "start",
        }}
      >
        {/* Left col — identity */}
        <div>
          <motion.div {...fade(0.1)}>
            <h2
              style={{
                fontSize: "clamp(34px, 4.2vw, 54px)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: 6,
              }}
            >
              Ajay
              <br />
              Pant
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 28,
              }}
            >
              Director
            </p>
          </motion.div>

          <motion.div
            {...fade(0.2)}
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 24,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {credits.map((c, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.22 + i * 0.07 }}
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                — {c}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Right col — quote */}
        <motion.div {...fade(0.15)} style={{ paddingTop: 8 }}>
          <span
            style={{
              display: "block",
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: isWide ? 100 : 60,
              color: "var(--accent)",
              lineHeight: 0.7,
              marginBottom: 24,
              opacity: 0.6,
            }}
          >
            "
          </span>
          <p
            style={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.1vw, 24px)",
              lineHeight: 1.65,
              color: "var(--text)",
              marginBottom: 28,
            }}
          >
            I have always wanted to create a romantic comedy that feels close to
            real life — a story that reflects the kind of people we see in our
            everyday surroundings. Rather than exaggeration, this film focuses
            on simplicity, honesty, and genuine emotions.
          </p>
          <div className="accent-line" style={{ marginBottom: 12 }} />
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            Ajay Pant, Director
          </p>
        </motion.div>
      </div>
    </div>
  );
}
