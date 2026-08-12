"use client";

import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

export default function Tracking() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      const eventName = target?.dataset.track;
      if (!eventName) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, page_path: window.location.pathname });
    }
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);
  return null;
}
