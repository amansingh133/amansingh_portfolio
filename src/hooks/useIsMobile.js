import { useState, useEffect } from "react";

let isMobileGlobal = false;
let listeners = [];

function notify() {
  listeners.forEach((l) => l(isMobileGlobal));
}

function initListener(breakpoint) {
  if (typeof window === "undefined") return;

  const handleResize = () => {
    const next = window.innerWidth < breakpoint;
    if (next !== isMobileGlobal) {
      isMobileGlobal = next;
      notify();
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // initialize
}

let initialized = false;

export default function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(isMobileGlobal);

  useEffect(() => {
    if (!initialized) {
      initListener(breakpoint);
      initialized = true;
    }

    listeners.push(setIsMobile);

    return () => {
      listeners = listeners.filter((l) => l !== setIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
