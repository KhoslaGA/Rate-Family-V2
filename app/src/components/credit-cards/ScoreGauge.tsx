"use client";

import React, { useEffect, useState } from "react";
import { colors, fonts } from "@/styles/tokens";

interface ScoreGaugeProps {
  score: number; // 1.0 to 5.0
  size?: number; // size in pixels
  strokeWidth?: number;
}

export default function ScoreGauge({
  score,
  size = 70,
  strokeWidth = 6,
}: ScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(1.0);

  useEffect(() => {
    // Smooth micro-animation on load/update
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  // SVG Calculations
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Normalized percentage of the circle (score is 1.0 to 5.0, so normalize to 0 to 100%)
  const percentage = (animatedScore / 5.0) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine dynamic colors based on score. Widen types explicitly —
  // colors.* are `as const` literals so the initial assignment narrows
  // the union and blocks later reassignment.
  let scoreColor: string = colors.red;
  let gradientId: string = "gradient-poor";

  if (score >= 4.5) {
    scoreColor = colors.green;
    gradientId = "gradient-elite";
  } else if (score >= 4.0) {
    scoreColor = colors.teal;
    gradientId = "gradient-excellent";
  } else if (score >= 3.0) {
    scoreColor = colors.amber;
    gradientId = "gradient-good";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <defs>
          <linearGradient id="gradient-elite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.green} />
            <stop offset="100%" stopColor="#0a633d" />
          </linearGradient>
          <linearGradient id="gradient-excellent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.teal} />
            <stop offset="100%" stopColor={colors.tealDark} />
          </linearGradient>
          <linearGradient id="gradient-good" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.amber} stopOpacity={0.9} />
            <stop offset="100%" stopColor={colors.amber} />
          </linearGradient>
          <linearGradient id="gradient-poor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.red} />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(31,32,36,0.06)"
          strokeWidth={strokeWidth}
        />

        {/* Foreground animated value circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>

      {/* Inside Text */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size,
          height: size,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: `${size * 0.26}px`,
            fontWeight: "900",
            color: colors.inkStrong,
            fontFamily: fonts.sans,
            lineHeight: 1,
          }}
        >
          {animatedScore.toFixed(1)}
        </span>
        <span
          style={{
            fontSize: `${size * 0.1}px`,
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: colors.inkMuted,
            marginTop: "1px",
            fontFamily: fonts.sans,
          }}
        >
          Score
        </span>
      </div>
    </div>
  );
}
