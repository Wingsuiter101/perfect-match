"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const phases = [
  {
    num: "01",
    name: "Bus Scenes",
    locations: "Koteshwor · Bagbazaar · Bhaktapur Bus Stops · Local Bus interior",
  },
  {
    num: "02A",
    name: "Khajaghar Scenes",
    locations: "Khajaghar",
  },
  {
    num: "02B",
    name: "IELTS Class Scenes",
    locations: "Consultancy / IELTS Class",
  },
  {
    num: "03",
    name: "Indoor House Scenes",
    locations: "Prajwal's House · Ishani's Hostel",
  },
  {
    num: "04",
    name: "Bhaktapur & Durbar Square",
    locations: "Bhaktapur Streets · Bhaktapur Durbar Square",
  },
  {
    num: "05",
    name: "Remaining + Party Scene",
    locations: "Park · Kamalpokhari · General street/road shots",
  },
];

const stats = [
  ["11–12", "Shoot Days"],
  ["130–145 min", "Film Length"],
  ["5", "Shoot Phases"],
  ["Baisakh–Ashadh 2083", "Target Deadline"],
];

export default function ProductionSlide() {
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
        style={{ marginBottom: 32 }}
      >
        Production Plan
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "1fr 2fr" : "1fr",
          gap: isWide ? 64 : 40,
        }}
      >
        {/* Left — stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          {stats.map(([val, label]) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "DM Serif Display, Georgia, serif",
                  fontSize: isWide ? 28 : 24,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {val}
              </p>
              <p className="label">{label}</p>
            </div>
          ))}

          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 20,
            }}
          >
            <p className="label" style={{ marginBottom: 8 }}>
              All Locations
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
              Inside Kathmandu Valley — Koteshwor, Bagbazaar, Bhaktapur,
              Kamalpokhari and surrounding areas.
            </p>
          </div>
        </motion.div>

        {/* Right — phases */}
        <div>
          {phases.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.14 + i * 0.08,
                ease: easeOutSoft,
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 20,
                paddingBottom: 16,
                marginBottom: 16,
                borderBottom: i < phases.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontFamily: "DM Serif Display, Georgia, serif",
                  fontSize: 12,
                  color: "var(--accent)",
                  fontWeight: 400,
                  paddingTop: 2,
                  letterSpacing: "0.04em",
                }}
              >
                {p.num}
              </p>
              <div>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text)",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </p>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  {p.locations}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
