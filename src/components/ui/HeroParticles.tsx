import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

function HeroParticles() {
  const particlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const animation = animate(particlesRef.current.querySelectorAll(".hero-particle"), {
      translateX: () => `${Math.random() * 80 - 40}px`,
      translateY: () => `${Math.random() * 80 - 40}px`,
      scale: [0.8, 1.4, 0.8],
      opacity: [0.25, 1, 0.25],
      duration: () => 2500 + Math.random() * 2500,
      delay: stagger(120),
      loop: true,
      alternate: true,
      easing: "easeInOutSine",
    });

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (document.hidden || motionPreference.matches) animation.pause();
      else animation.resume();
    };
    document.addEventListener("visibilitychange", syncPlayback);
    motionPreference.addEventListener("change", syncPlayback);
    syncPlayback();

    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      motionPreference.removeEventListener("change", syncPlayback);
      animation.pause();
    };
  }, []);

  return (
    <div className="hero-particles" ref={particlesRef}>
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default HeroParticles;
