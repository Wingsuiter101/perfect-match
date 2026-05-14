"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const leads = [
  {
    actor: "Aslan",
    character: "Ishani",
    handle: "@that.ambitious.girl",
    bg: "Content creator · Acting workshop at KathaGhera with Sudam CK",
    quote:
      "Ishani looks like a strong modern day woman who is very much relatable to this generation of young women and carries the story of every girl who dreams of writing her own story.",
  },
  {
    actor: "Swarnim",
    character: "Prajwal",
    handle: "@1swnmm",
    bg: "4 years theatre · Mirror, Agam, Dalle Khola · Films: Bikram Aditya, Mirai",
    quote:
      "The script and development of every character is up to mark. Prajwal has a great arc with a remarkable emotional graph. The team is chill and experimental.",
  },
];

const supporting = [
  {
    actor: "Aayushma",
    character: "Ridhima",
    note: "Debut role · Keen on film technicalities and learning",
  },
  {
    actor: "Manish",
    character: "Mahesh",
    note: "YouTube acting · Mandala Theater Nepal · Ek Sikka Drama · Mirror (Play)",
  },
  {
    actor: "Bipana",
    character: "Sapana",
    note: "Debut actor · Drawn to artistic expression and self-discovery",
  },
];

export default function CastSlide() {
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
        style={{ marginBottom: 40 }}
      >
        Cast
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 1fr" : "1fr",
          gap: isWide ? 48 : 32,
        }}
      >
        {/* Lead cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {leads.map((lead, i) => (
            <motion.div
              key={lead.actor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.12,
                ease: easeOutSoft,
              }}
              style={{
                background: "var(--surface)",
                padding: "24px 24px",
                borderTop: "1px solid var(--accent)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 4,
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    fontFamily: "DM Serif Display, Georgia, serif",
                    color: "var(--text)",
                  }}
                >
                  {lead.actor}
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  as {lead.character}
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 14,
                }}
              >
                {lead.bg}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  marginBottom: 10,
                }}
              >
                &ldquo;{lead.quote}&rdquo;
              </p>
              <p style={{ fontSize: 11, color: "var(--border)" }}>
                {lead.handle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting cast */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: easeOutSoft }}
        >
          <p
            className="label"
            style={{ marginBottom: 20, color: "var(--text-muted)" }}
          >
            Supporting Cast
          </p>
          <div
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {supporting.map((s, i) => (
              <motion.div
                key={s.actor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: isWide ? "minmax(0, 120px) minmax(0, 120px) 1fr" : "1fr",
                  gap: isWide ? 16 : 8,
                  alignItems: isWide ? "center" : "start",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontFamily: "DM Serif Display, Georgia, serif",
                    color: "var(--text)",
                  }}
                >
                  {s.actor}
                </p>
                <p style={{ fontSize: 12, color: "var(--accent)" }}>
                  {s.character}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    gridColumn: isWide ? "auto" : "1 / -1",
                  }}
                >
                  {s.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Extras note */}
          <div style={{ paddingTop: 24 }}>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              + Extras &amp; Crowd — NPR 50,000 allocation for authentic street
              scenes, bus sequences, and Bhaktapur Durbar Square.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
