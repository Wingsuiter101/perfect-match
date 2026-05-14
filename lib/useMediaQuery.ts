"use client";

import { useEffect, useState } from "react";

/**
 * Subscribes to a CSS media query. SSR default is `false` until mounted.
 */
export function useMediaQuery(query: string, defaultMatches = false): boolean {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    const onChange = () => setMatches(m.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
