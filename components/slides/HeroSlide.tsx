"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/easing";
import { useMediaQuery } from "@/lib/useMediaQuery";

const HERO_COVER = "/cover.png";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOutSoft, delay },
});

const contentZ = { position: "relative" as const, zIndex: 2 };

const stats = [
  ["NPR 20L", "Total Budget"],
  ["11–12", "Shoot Days"],
  ["130–145 min", "Film Length"],
  ["16", "Crew Positions"],
] as const;

export default function HeroSlide() {
  const stackLayout = useMediaQuery("(max-width: 900px)");

  return (
    <div
      className="deck-pad"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: 0,
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      <Image
        src={HERO_COVER}
        alt="Perfect Match — opening visual"
        fill
        priority
        sizes="(max-width: 900px) 100vw, 100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: stackLayout
            ? "linear-gradient(180deg, rgba(11,11,11,0.88) 0%, rgba(11,11,11,0.75) 45%, rgba(11,11,11,0.9) 100%)"
            : "linear-gradient(90deg, rgba(11,11,11,0.92) 0%, rgba(11,11,11,0.6) 45%, rgba(11,11,11,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -60,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(200px, 45vw, 700px)",
          fontFamily: "DM Serif Display, Georgia, serif",
          color: "rgba(201,169,110,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        ?
      </div>

      <div style={contentZ}>
        <motion.p {...fade(0)} className="label" style={{ marginBottom: stackLayout ? 24 : 48 }}>
          Film Pitch Deck — 2026
        </motion.p>

        <div style={{ marginBottom: stackLayout ? 20 : 32 }}>
          <motion.h1
            {...fade(0.1)}
            style={{
              fontSize: "clamp(48px, 10.5vw, 112px)",
              lineHeight: 0.92,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Perfect
          </motion.h1>
          <motion.div
            {...fade(0.18)}
            style={{ display: "flex", alignItems: "flex-end", gap: 4 }}
          >
            <h1
              style={{
                fontSize: "clamp(48px, 10.5vw, 112px)",
                lineHeight: 0.92,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              Match
            </h1>
            <span
              style={{
                fontSize: "clamp(48px, 10.5vw, 112px)",
                lineHeight: 0.92,
                fontWeight: 400,
                color: "var(--accent)",
                fontFamily: "DM Serif Display, Georgia, serif",
              }}
            >
              ?
            </span>
          </motion.div>
        </div>

        <motion.p
          {...fade(0.28)}
          style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            fontStyle: "italic",
            marginBottom: stackLayout ? 28 : 48,
            maxWidth: 480,
            lineHeight: 1.45,
          }}
        >
          About Love, Timing and Emotional Enlightenment
        </motion.p>

        <motion.div {...fade(0.38)} style={{ marginBottom: stackLayout ? 32 : 56 }}>
          <div className="accent-line" style={{ marginBottom: 20 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: stackLayout ? "1fr" : "repeat(3, auto)",
              gap: stackLayout ? "12px 0" : "8px 48px",
              maxWidth: 560,
            }}
          >
            {[
              ["Director", "Ajay Pant"],
              ["Written by", "Aashish Shrestha"],
              ["Story by", "Ajay Pant"],
            ].map(([role, name]) => (
              <div key={role}>
                <p className="label" style={{ marginBottom: 4 }}>
                  {role}
                </p>
                <p style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade(0.46)} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            "Realistic Romantic Drama",
            "Right Person, Wrong Timing",
            "Nepali Cinema",
            "Pre-Production",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                border: "1px solid rgba(240,236,228,0.2)",
                background: "rgba(11,11,11,0.5)",
                color: "var(--text-secondary)",
                padding: "5px 12px",
                borderRadius: 100,
                fontSize: 11,
                letterSpacing: "0.06em",
                lineHeight: 1.3,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {stackLayout && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: easeOutSoft }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {stats.map(([val, label]) => (
              <div key={label} style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontSize: 20,
                    fontFamily: "DM Serif Display, Georgia, serif",
                    color: "var(--text)",
                    marginBottom: 2,
                    lineHeight: 1.1,
                  }}
                >
                  {val}
                </p>
                <p className="label" style={{ fontSize: 11 }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {!stackLayout && (
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: easeOutSoft }}
          style={{
            position: "absolute",
            right: "max(40px, env(safe-area-inset-right, 0px))",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            alignItems: "flex-end",
            zIndex: 2,
          }}
        >
          {stats.map(([val, label]) => (
            <div key={label} style={{ textAlign: "right" }}>
              <p
                style={{
                  fontSize: 24,
                  fontFamily: "DM Serif Display, Georgia, serif",
                  color: "var(--text)",
                  marginBottom: 2,
                }}
              >
                {val}
              </p>
              <p className="label">{label}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
