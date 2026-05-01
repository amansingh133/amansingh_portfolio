import { useState, useEffect } from "react";

/**
 * Returns true when the viewport is narrower than `breakpoint` (px).
 *
 * KEY FIX: The lazy initializer in useState() runs synchronously during
 * the very first render — before any paint — so the correct mobile/desktop
 * layout is rendered immediately on real devices. The old global-singleton
 * approach initialised to `false`, meaning phones always saw the desktop
 * layout on first paint and accordion/carousel logic never kicked in.
 */
export default function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    // matchMedia is more efficient than a resize listener
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);

    // Re-sync in case the breakpoint prop changed after mount
    setIsMobile(window.innerWidth < breakpoint);

    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}
