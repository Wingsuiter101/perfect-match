"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const characters = [
  {
    name: "Prajwal",
    role: "Lead",
    archetype: "The Dreamer",
    desc: "Reflective, introverted, poetic. Emotionally sincere but struggles to express himself. Still trying to figure out what his life is.",
    isLead: true,
  },
  {
    name: "Ishani",
    role: "Lead",
    archetype: "The Achiever",
    desc: "Ambitious, disciplined, goal-oriented. Torn between attachment and aspiration. Knows what she wants but questions if she can have it all.",
    isLead: true,
  },
  {
    name: "Mahesh",
    role: "Supporting",
    archetype: "The Anchor",
    desc: "Carefree, grounded, subtly humorous. The friend who keeps everyone balanced. Observant but never intrusive.",
    isLead: false,
  },
  {
    name: "Ridhima",
    role: "Supporting",
    archetype: "The Philosopher",
    desc: "Pragmatic, perceptive, philosophical. Sees the bigger picture when others are lost in emotion.",
    isLead: false,
  },
  {
    name: "Sapana",
    role: "Supporting",
    archetype: "The Witness",
    desc: "A supporting presence within the narrative. Her role contributes to the social environment and group dynamic.",
    isLead: false,
  },
];

export default function CharactersSlide() {
  const isFiveCol = useMediaQuery("(min-width: 1200px)");
  const isTwoCol = useMediaQuery("(min-width: 640px)");
  const gridColumns = isFiveCol
    ? "1.2fr 1.2fr 1fr 1fr 1fr"
    : isTwoCol
      ? "repeat(2, minmax(0, 1fr))"
      : "1fr";

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
        style={{ marginBottom: 40 }}
      >
        Characters
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {characters.map((char, i) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08 + i * 0.1,
              ease: easeOutSoft,
            }}
            style={{
              background: char.isLead ? "var(--surface)" : "transparent",
              border: char.isLead ? "none" : "1px solid var(--border)",
              padding: char.isLead ? "28px 24px" : "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              position: "relative",
            }}
          >
            {char.isLead && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "var(--accent)",
                  opacity: 0.7,
                }}
              />
            )}

            <div
              style={{
                marginBottom: char.isLead ? 16 : 12,
                paddingTop: char.isLead ? 8 : 0,
              }}
            >
              <h3
                style={{
                  fontSize: char.isLead ? 24 : 18,
                  fontWeight: 400,
                  fontFamily: "DM Serif Display, Georgia, serif",
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {char.name}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: char.isLead ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                {char.archetype}
              </p>
            </div>

            <div
              style={{
                width: 16,
                height: 1,
                background: char.isLead ? "var(--accent)" : "var(--border)",
                marginBottom: 12,
              }}
            />

            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                flex: 1,
              }}
            >
              {char.desc}
            </p>

            <p
              style={{
                fontSize: 11,
                color: "var(--border)",
                marginTop: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {char.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
