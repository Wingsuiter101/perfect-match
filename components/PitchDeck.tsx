"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

import HeroSlide from "./slides/HeroSlide";
import StorySlide from "./slides/StorySlide";
import DirectorSlide from "./slides/DirectorSlide";
import ToneSlide from "./slides/ToneSlide";
import StructureSlide from "./slides/StructureSlide";
import CharactersSlide from "./slides/CharactersSlide";
import CastSlide from "./slides/CastSlide";
import ProductionSlide from "./slides/ProductionSlide";
import BudgetSlide from "./slides/BudgetSlide";
import Projections3090Slide from "./slides/Projections3090Slide";
import FinancialSummarySlide from "./slides/FinancialSummarySlide";
import MusicSlide from "./slides/MusicSlide";
import ClosingSlide from "./slides/ClosingSlide";
import { easeSlide } from "@/lib/easing";

const SLIDES = [
  { id: "hero", label: "Title", component: HeroSlide },
  { id: "story", label: "The Story", component: StorySlide },
  { id: "director", label: "Director", component: DirectorSlide },
  { id: "tone", label: "Tone & Style", component: ToneSlide },
  { id: "structure", label: "Structure", component: StructureSlide },
  { id: "characters", label: "Characters", component: CharactersSlide },
  { id: "cast", label: "Cast", component: CastSlide },
  { id: "production", label: "Production", component: ProductionSlide },
  { id: "budget", label: "Budget", component: BudgetSlide },
  { id: "projections", label: "30-60-90", component: Projections3090Slide },
  { id: "financial", label: "Summary", component: FinancialSummarySlide },
  { id: "music", label: "Music", component: MusicSlide },
  { id: "closing", label: "Closing", component: ClosingSlide },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function PitchDeck() {
  const [[current, dir], setSlide] = useState([0, 0]);

  const go = useCallback(
    (next: number) => {
      if (next < 0 || next >= SLIDES.length) return;
      setSlide([next, next > current ? 1 : -1]);
    },
    [current]
  );

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ")
        go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [current, go]);

  const SlideComponent = SLIDES[current].component;
  const navCompact = useMediaQuery("(max-width: 899px)");
  const swipeStartX = useRef<number | null>(null);

  return (
    <div
      className="pitch-deck-viewport"
      onTouchStart={(e) => {
        swipeStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (swipeStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - swipeStartX.current;
        swipeStartX.current = null;
        if (Math.abs(dx) < 56) return;
        if (dx < 0) go(current + 1);
        else go(current - 1);
      }}
      style={{
        width: "100%",
        minWidth: 0,
        overflow: "hidden",
        position: "relative",
        background: "var(--bg)",
      }}
    >
      {/* Slide */}
      <AnimatePresence custom={dir} mode="wait">
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: easeSlide }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            minWidth: 0,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Nav dots — left rail (desktop) · bottom bar (phone / tablet) */}
      <div
        style={
          navCompact
            ? {
                position: "fixed",
                left: 12,
                right: 12,
                bottom: 72,
                top: "auto",
                transform: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                zIndex: 100,
                paddingLeft: "env(safe-area-inset-left, 0px)",
                paddingRight: "env(safe-area-inset-right, 0px)",
                maxWidth: "100%",
                pointerEvents: "none",
              }
            : {
                position: "fixed",
                left: 28,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                zIndex: 100,
                pointerEvents: "none",
              }
        }
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(i)}
            title={s.label}
            aria-label={s.label}
            aria-current={i === current ? "true" : undefined}
            style={{
              width: i === current ? 20 : 4,
              height: 4,
              minWidth: i === current ? 20 : 4,
              borderRadius: 2,
              background: i === current ? "var(--accent)" : "var(--border)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
              pointerEvents: "auto",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Slide counter — bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: "max(16px, env(safe-area-inset-bottom, 0px))",
          right: "max(16px, env(safe-area-inset-right, 0px))",
          display: "flex",
          alignItems: "center",
          gap: 12,
          zIndex: 100,
        }}
      >
        <button
          type="button"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            color: current === 0 ? "var(--border)" : "var(--text-secondary)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            cursor: current === 0 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            transition: "border-color 0.2s, color 0.2s",
            touchAction: "manipulation",
          }}
        >
          ←
        </button>
        <span
          className="slide-number"
          style={{
            fontSize: 12,
            color: "var(--text-muted)",
            minWidth: 48,
            textAlign: "center",
          }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => go(current + 1)}
          disabled={current === SLIDES.length - 1}
          aria-label="Next slide"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            color:
              current === SLIDES.length - 1
                ? "var(--border)"
                : "var(--text-secondary)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            cursor: current === SLIDES.length - 1 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            transition: "border-color 0.2s, color 0.2s",
            touchAction: "manipulation",
          }}
        >
          →
        </button>
      </div>

      {/* Keyboard hint — desktop only */}
      {!navCompact && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            left: 56,
            zIndex: 100,
          }}
        >
          <span
            className="label"
            style={{ fontSize: 10, color: "var(--border)", letterSpacing: "0.1em" }}
          >
            ← → navigate
          </span>
        </div>
      )}
    </div>
  );
}
