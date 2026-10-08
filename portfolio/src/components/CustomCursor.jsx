import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let reqId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp animation loop for trailing outer circle
    let currentX = -100;
    let currentY = -100;

    const animateFollower = () => {
      currentX += (position.x - currentX) * 0.2;
      currentY += (position.y - currentY) * 0.2;
      setFollowerPos({ x: currentX, y: currentY });
      reqId = requestAnimationFrame(animateFollower);
    };
    reqId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(reqId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small precision center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isPointer ? 1.5 : 1
          })`,
        }}
      />

      {/* Outer trailing aesthetic ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] w-8 h-8 border border-accent/60 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isPointer
            ? "scale-150 border-accent bg-accent/10"
            : "scale-100 opacity-60"
        }`}
        style={{
          transform: `translate3d(${followerPos.x}px, ${followerPos.y}px, 0) scale(${
            isPointer ? 1.6 : 1
          })`,
        }}
      />
    </>
  );
}
