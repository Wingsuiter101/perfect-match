"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const fmt = (n: number) => n.toLocaleString("en-IN");

const phaseOneRows: { label: string; npr: number }[] = [
  { label: "Cast", npr: 73000 },
  { label: "Technicians", npr: 269500 },
  { label: "Equipment", npr: 155000 },
  { label: "Music", npr: 50000 },
  { label: "Location", npr: 50000 },
  { label: "Tech hardware", npr: 25000 },
  { label: "Miscellaneous & transportation", npr: 40000 },
];

const phaseTwoRows: { label: string; npr: number }[] = [
  { label: "Cast", npr: 73000 },
  { label: "Technicians", npr: 269500 },
  { label: "DIT", npr: 120000 },
  { label: "Music", npr: 50000 },
  { label: "Post-production", npr: 95000 },
  { label: "Miscellaneous", npr: 30000 },
];

const phaseThreeRows: { label: string; npr: number }[] = [
  { label: "First look poster shoot & design", npr: 25000 },
  { label: "BTS & Making Doc", npr: 50000 },
  { label: "Trailer / Teaser", npr: 40000 },
  { label: "Posters and Key Arts", npr: 60000 },
  { label: "Social Rollout", npr: 100000 },
  { label: "Song Launch / Music Promo", npr: 75000 },
  { label: "Special Private Screening", npr: 125000 },
  { label: "Paid Boosting", npr: 100000 },
  { label: "PR & Media Relations", npr: 75000 },
  { label: "Miscellaneous", npr: 50000 },
];

const phaseOneTotal = 662500;
const phaseTwoTotal = 637500;
const phaseThreeTotal = 700000;
const productionTotal = phaseOneTotal + phaseTwoTotal;
const marketingTotal = phaseThreeTotal;
const projectTotal = productionTotal + marketingTotal;

const donutSegments = [
  { label: "Production", amount: productionTotal, color: "#c9a96e" },
  { label: "Marketing", amount: marketingTotal, color: "#7a8fbf" },
];

function DonutChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const cx = 100,
    cy = 100,
    R = 72,
    r = 44;
  const total = donutSegments.reduce((s, c) => s + c.amount, 0);

  const slices: { d: string; color: string; i: number }[] = [];
  let angle = -Math.PI / 2;
  donutSegments.forEach((cat, i) => {
    const sweep = (cat.amount / total) * 2 * Math.PI;
    const x1 = cx + R * Math.cos(angle);
    const y1 = cy + R * Math.sin(angle);
    const x2 = cx + R * Math.cos(angle + sweep);
    const y2 = cy + R * Math.sin(angle + sweep);
    const ix1 = cx + r * Math.cos(angle);
    const iy1 = cy + r * Math.sin(angle);
    const ix2 = cx + r * Math.cos(angle + sweep);
    const iy2 = cy + r * Math.sin(angle + sweep);
    const large = sweep > Math.PI ? 1 : 0;

    const d = [
      `M ${x1} ${y1}`,
      `A ${R} ${R} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix2} ${iy2}`,
      `A ${r} ${r} 0 ${large} 0 ${ix1} ${iy1}`,
      "Z",
    ].join(" ");

    slices.push({ d, color: cat.color, i });
    angle += sweep;
  });

  const active = hovered !== null ? donutSegments[hovered] : null;
  const activePct = active
    ? ((active.amount / total) * 100).toFixed(1)
    : null;

  return (
    <div style={{ position: "relative", width: 200, height: 200 }}>
      <svg
        viewBox="0 0 200 200"
        width={200}
        height={200}
        style={{ overflow: "visible" }}
      >
        {slices.map((s) => (
          <motion.path
            key={s.i}
            d={s.d}
            fill={s.color}
            opacity={hovered === null ? 0.88 : hovered === s.i ? 1 : 0.3}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.04 }}
            onHoverStart={() => setHovered(s.i)}
            onHoverEnd={() => setHovered(null)}
            transition={{ duration: 0.2 }}
          />
        ))}
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill={active ? active.color : "var(--text)"}
          fontSize={active ? 12 : 11}
          fontFamily="DM Sans, sans-serif"
          fontWeight="600"
        >
          {active ? `${activePct}%` : "NPR"}
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize={9}
          fontFamily="DM Sans, sans-serif"
        >
          {active ? fmt(active.amount) : fmt(projectTotal)}
        </text>
      </svg>
    </div>
  );
}

function AnimatedCount({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString("en-IN"));
  useEffect(() => {
    const ctrl = animate(mv, value, { duration: 1.2, ease: "easeOut" });
    return ctrl.stop;
  }, [mv, value]);
  return <motion.span>{display}</motion.span>;
}

function PhaseCard({
  title,
  subtitle,
  totalNpr,
  rows,
  color,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  totalNpr: number;
  rows: { label: string; npr: number }[];
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: easeOutSoft }}
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        border: "1px solid var(--border)",
        borderRadius: 10,
        background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 18px 14px",
          borderBottom: "1px solid var(--border)",
          background: `linear-gradient(135deg, ${color}22, transparent 62%)`,
        }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color,
            marginBottom: 8,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(24px, 3.2vw, 34px)",
            color: "var(--text)",
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          NPR {fmt(totalNpr)}
        </p>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>
          {subtitle}
        </p>
      </div>
      <div style={{ padding: "12px 18px 16px" }}>
        {rows.map((r) => (
          <div key={r.label}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 12,
                alignItems: "baseline",
                padding: "7px 0",
              }}
            >
              <span style={{ color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.35 }}>
                {r.label}
              </span>
              <span
                style={{
                  color: "var(--text)",
                  fontSize: 12,
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                {fmt(r.npr)}
              </span>
            </div>
            <div
              style={{
                height: 2,
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.max(8, (r.npr / totalNpr) * 100)}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: color,
                  opacity: 0.75,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SplitStat({
  label,
  amount,
  color,
}: {
  label: string;
  amount: number;
  color: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10px 1fr auto",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
      <span style={{ color: "var(--text-secondary)", fontSize: 13 }}>{label}</span>
      <span
        style={{
          color: "var(--text)",
          fontSize: 13,
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
        }}
      >
        NPR {fmt(amount)}
      </span>
    </div>
  );
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: "8px 12px",
        background: "rgba(255,255,255,0.025)",
      }}
    >
      <span style={{ color: "var(--text-muted)", fontSize: 11, marginRight: 8 }}>
        {label}
      </span>
      <span style={{ color: "var(--text)", fontSize: 12, fontWeight: 600 }}>
        {value}
      </span>
    </div>
  );
}

function DetailRail() {
  const phases = [
    ["Phase 1", phaseOneRows],
    ["Phase 2", phaseTwoRows],
    ["Phase 3", phaseThreeRows],
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.34, ease: easeOutSoft }}
      style={{
        marginTop: 18,
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {phases.map(([title, rows]) => (
        <div
          key={title}
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 10,
            minWidth: 0,
          }}
        >
          <p className="label" style={{ fontSize: 9, marginBottom: 8 }}>
            {title} detail
          </p>
          <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>
            {rows.map((row) => `${row.label} ${fmt(row.npr)}`).join(" / ")}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
export default function BudgetSlide() {
  const isWide = useMediaQuery("(min-width: 1024px)");
  const isTallEnough = useMediaQuery("(min-height: 760px)");

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
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label"
          style={{ marginBottom: 0 }}
        >
          Project budget
        </motion.p>
        {isWide && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}
          >
            <SummaryPill label="Production" value={`${Math.round((productionTotal / projectTotal) * 100)}%`} />
            <SummaryPill label="Marketing" value={`${Math.round((marketingTotal / projectTotal) * 100)}%`} />
          </motion.div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isWide ? "minmax(260px, 0.9fr) minmax(0, 2.1fr)" : "1fr",
          gap: isWide ? 26 : 18,
          alignItems: "stretch",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOutSoft }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: isWide ? "22px 24px" : "18px",
            background: "radial-gradient(circle at 20% 0%, rgba(201,169,110,0.18), transparent 42%), var(--surface)",
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: 12 }}>
              Total project budget
            </p>
            <p
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "clamp(34px, 6vw, 58px)",
                color: "var(--text)",
                lineHeight: 0.95,
                marginBottom: 16,
              }}
            >
              NPR <AnimatedCount value={projectTotal} />
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <SplitStat label="Production" amount={productionTotal} color="#c9a96e" />
              <SplitStat label="Marketing" amount={marketingTotal} color="#7a8fbf" />
            </div>
          </div>

          <div style={{ alignSelf: "center", transform: isWide ? "scale(0.82)" : "scale(0.72)", margin: isWide ? "8px 0 -14px" : "-18px 0" }}>
            <DonutChart />
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isWide ? "repeat(3, minmax(0, 1fr))" : "1fr",
            gap: 14,
          }}
        >
          <PhaseCard
            title="Phase 1"
            subtitle="Production setup and principal shoot."
            totalNpr={phaseOneTotal}
            rows={[
              { label: "Technicians", npr: 269500 },
              { label: "Equipment", npr: 155000 },
              { label: "Cast", npr: 73000 },
              { label: "Other production", npr: 165000 },
            ]}
            color="#c9a96e"
            delay={0.16}
          />
          <PhaseCard
            title="Phase 2"
            subtitle="DIT, post-production, music, and delivery."
            totalNpr={phaseTwoTotal}
            rows={[
              { label: "Technicians", npr: 269500 },
              { label: "DIT", npr: 120000 },
              { label: "Post-production", npr: 95000 },
              { label: "Other post costs", npr: 153000 },
            ]}
            color="#d7b77a"
            delay={0.22}
          />
          <PhaseCard
            title="Phase 3"
            subtitle="Marketing push, screenings, and paid reach."
            totalNpr={phaseThreeTotal}
            rows={[
              { label: "Private screening", npr: 125000 },
              { label: "Social + paid boosting", npr: 200000 },
              { label: "Music + PR", npr: 150000 },
              { label: "Other marketing", npr: 225000 },
            ]}
            color="#7a8fbf"
            delay={0.28}
          />
        </div>
      </div>

      {isWide && isTallEnough && <DetailRail />}
    </div>
  );
}
