"use client";

export default function AnimatedBackgroundWave() {
  return (
    <div className="background-wave">
      {/* Gradient background glow */}
      <div className="wave-glow" />

      {/* The curved surface with animated neon border */}
      <div className="wave-surface">
        {/* Animated light that travels along the curve */}
        <div className="neon-sweep" />
      </div>

      {/* Extra glow layer for depth */}
      <div className="wave-reflection" />
    </div>
  );
}
