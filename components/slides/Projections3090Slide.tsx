"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const fmt = (n: number) => n.toLocaleString("en-IN");

const day30 = {
  title: "Day 0–30 (Launch)",
  intro:
    "Release at NPR 149. Cast-led marketing, homepage takeover, premiere push.",
  rows: [
    { k: "Paid views", v: "9,000 × 149", npr: 1341000 },
    { k: "Variable fees (10%)", v: "Gateway / support", npr: -134100 },
  ],
  total: 1206900,
  totalLabel: "30-Day Net Revenue",
};

const day60 = {
  title: "Day 31–60 (Momentum)",
  intro:
    "Step down to NPR 99. Retarget non-buyers, publish testimonials, reminders.",
  rows: [
    { k: "Paid views", v: "8,000 × 99", npr: 792000 },
    { k: "Variable fees (10%)", v: "Gateway / support", npr: -79200 },
  ],
  increment: 712800,
  incrementLabel: "Day 31-60 Net Revenue",
  cumulative: 1919700,
  cumulativeLabel: "Cumulative Net by Day 60",
};

const day90 = {
  title: "Day 61–180 (Long-tail)",
  intro:
    "Keep NPR 99. Referral codes, diaspora targeting, bundle offers. Licensing after 6 mos.",
  rows: [
    { k: "Paid views", v: "6,000 × 99", npr: 594000 },
    { k: "Variable fees (10%)", v: "Gateway / support", npr: -59400 },
  ],
  increment: 534600,
  incrementLabel: "Day 61-180 Net Revenue",
  cumulative: 2454300,
  cumulativeLabel: "Total 180-Day Net Revenue",
};

function Col({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: easeOutSoft }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "16px 18px",
        background: "var(--surface)",
        minWidth: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Projections3090Slide() {
  const isWide = useMediaQuery("(min-width: 1024px)");

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
        style={{ marginBottom: 8 }}
      >
        PPV Movie Business Case — Projections
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          marginBottom: 6,
        }}
      >
        Model: <span style={{ color: "var(--accent)" }}>Premium Launch → Momentum → Long Tail</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          marginBottom: 20,
        }}
      >
        Assumption: PPV at NPR 149 (Day 0–30) then NPR 99 (Day 31–180)
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "repeat(3, minmax(0, 1fr))" : "1fr",
          gap: isWide ? 16 : 14,
          alignItems: "stretch",
        }}
      >
        <Col delay={0.12}>
          <p
            style={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: 20,
              color: "var(--text)",
              marginBottom: 8,
            }}
          >
            {day30.title}
          </p>
          {day30.rows.map((r) => (
            <div
              key={r.k}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                paddingBottom: 8,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {r.k}
              </span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                {r.v}
              </span>
              <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>
                NPR {fmt(r.npr)}
              </span>
            </div>
          ))}
          <div style={{ marginTop: "auto", paddingTop: 8 }}>
            <p className="label" style={{ marginBottom: 4, fontSize: 10 }}>
              {day30.totalLabel}
            </p>
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: 22,
                color: "var(--accent)",
              }}
            >
              NPR {fmt(day30.total)}
            </p>
          </div>
        </Col>

        <Col delay={0.2}>
          <p
            style={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: 20,
              color: "var(--text)",
              marginBottom: 6,
            }}
          >
            {day60.title}
          </p>
          <p style={{ fontSize: 10, lineHeight: 1.45, color: "var(--text-muted)", marginBottom: 10 }}>
            {day60.intro}
          </p>
          {day60.rows.map((r) => (
            <div
              key={r.k}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                paddingBottom: 8,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.k}</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{r.v}</span>
              <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>
                NPR {fmt(r.npr)}
              </span>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <p className="label" style={{ marginBottom: 2, fontSize: 10 }}>{day60.incrementLabel}</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>NPR {fmt(day60.increment)}</p>
          </div>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border)" }}>
            <p className="label" style={{ marginBottom: 2, fontSize: 10 }}>{day60.cumulativeLabel}</p>
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: 21,
                color: "var(--accent)",
              }}
            >
              NPR {fmt(day60.cumulative)}
            </p>
          </div>
        </Col>

        <Col delay={0.28}>
          <p
            style={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: 20,
              color: "var(--text)",
              marginBottom: 6,
            }}
          >
            {day90.title}
          </p>
          <p style={{ fontSize: 10, lineHeight: 1.45, color: "var(--text-muted)", marginBottom: 10 }}>
            {day90.intro}
          </p>
          {day90.rows.map((r) => (
            <div
              key={r.k}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                paddingBottom: 8,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.k}</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{r.v}</span>
              <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>
                NPR {fmt(r.npr)}
              </span>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <p className="label" style={{ marginBottom: 2, fontSize: 10 }}>{day90.incrementLabel}</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>NPR {fmt(day90.increment)}</p>
          </div>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border)" }}>
            <p className="label" style={{ marginBottom: 2, fontSize: 10 }}>{day90.cumulativeLabel}</p>
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: 21,
                color: "var(--accent)",
              }}
            >
              NPR {fmt(day90.cumulative)}
            </p>
          </div>
        </Col>
      </div>
    </div>
  );
}
