"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", move);

    const updateTargets = () => {
      const targets = document.querySelectorAll(
        "a, button, .skill-item, .project-card, .hack-card, .stat-card"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    updateTargets();

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return <div id="cursor" aria-hidden="true" />;
}
