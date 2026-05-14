"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const fmt = (n: number) => n.toLocaleString("en-IN");

const rows: { item: string; npr: number; highlight?: boolean }[] = [
  { item: "Total Investment (Production + Marketing)", npr: 2000000 },
  { item: "90-day Gross Revenue (Modeled)", npr: 2727000 },
  { item: "90-day Net Revenue (After 10% fee)", npr: 2454300, highlight: true },
  { item: "Profit Before Tax", npr: 454300, highlight: true },
  { item: "Revenue Share - OTT (70%)", npr: 318010 },
  { item: "Revenue Share - Creator (30%)", npr: 136290 },
];

export default function FinancialSummarySlide() {
  const isNarrow = useMediaQuery("(max-width: 480px)");

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
        style={{ marginBottom: 28 }}
      >
        Financial summary
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: easeOutSoft }}
        style={{
          width: "100%",
          maxWidth: 560,
          border: "1px solid var(--border)",
          borderRadius: 8,
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            padding: "12px 18px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface-2)",
          }}
        >
          <span>Item</span>
          <span style={{ textAlign: "right" }}>NPR</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.item}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + i * 0.05, ease: easeOutSoft }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              padding: "12px 18px",
              borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
              background: r.highlight ? "rgba(201, 169, 110, 0.06)" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: isNarrow ? 14 : 15,
                color: r.highlight ? "var(--text)" : "var(--text-secondary)",
                fontWeight: r.highlight ? 500 : 400,
                lineHeight: 1.35,
                paddingRight: 8,
                minWidth: 0,
              }}
            >
              {r.item}
            </span>
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: isNarrow ? 12 : 15,
                fontWeight: r.highlight ? 600 : 500,
                color: r.highlight ? "var(--accent)" : "var(--text)",
                textAlign: "right",
                fontVariantNumeric: "tabular-nums",
                flexShrink: 0,
              }}
            >
              {fmt(r.npr)}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        style={{ marginTop: 20, fontSize: 12, color: "var(--text-muted)", maxWidth: 520 }}
      >
        ROI is 22.7% and break-even is ~18,743 paid views. Base PPV collections assume a 10% variable fee/gateway cost. Revenue share split is 70:30 (OTT:Creator).
      </motion.p>
    </div>
  );
}
