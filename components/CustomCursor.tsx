"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 8}px`;
      cursor.style.top = `${e.clientY - 8}px`;
    };

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", move);

    const observeHoverables = () => {
      const hoverables = document.querySelectorAll(
        "a, button, .btn-primary, .btn-secondary, .color-swatch, .filter-btn, input, select, textarea"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    observeHoverables();
    const observer = new MutationObserver(observeHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    // Hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "a, button, input, select, textarea { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
      document.body.style.cursor = "";
      style.remove();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
