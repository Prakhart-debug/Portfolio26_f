import React, { useEffect, useState } from "react"

export default function CursorTrail({ color = "rgba(0, 200, 255, 0.6)" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      // comet dots
      const dot = document.createElement("span")
      dot.className = "cursor-trail-dot"
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      dot.style.background = color
      document.body.appendChild(dot)

      // animate trail
      requestAnimationFrame(() => {
        dot.style.transform = "translate(-50%, -50%) scale(0)"
        dot.style.opacity = "0"
      })
      setTimeout(() => dot.remove(), 450)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [color])

  return (
    <>
      {/* Main glowing cursor */}
      <div
        className="cursor-ring"
        style={{
          left: pos.x,
          top: pos.y,
          borderColor: color,
          boxShadow: `0 0 20px ${color}`,
        }}
      />
      <style>{`
        body { cursor: none; }

        .cursor-ring {
          position: fixed;
          width: 24px;
          height: 24px;
          border: 2px solid;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
          z-index: 9999;
          mix-blend-mode: screen;
        }

        .cursor-trail-dot {
          position: fixed;
          left: 0; top: 0;
          width: 8px; height: 8px;
          border-radius: 9999px;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1);
          transition: transform 0.45s ease, opacity 0.45s ease;
          z-index: 9998;
          box-shadow: 0 0 12px ${color};
        }

        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          body { cursor: auto; }
          .cursor-ring, .cursor-trail-dot { display: none; }
        }
      `}</style>
    </>
  )
}
