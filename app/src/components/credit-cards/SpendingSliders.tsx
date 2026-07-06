"use client";

import React from "react";
import { SpendProfile } from "@/lib/scoring";
import { colors, fonts } from "@/styles/tokens";
import { ShoppingCart, Fuel, Utensils, Car, Plane, CreditCard, Layers } from "lucide-react";

interface SpendingSlidersProps {
  spend: SpendProfile;
  onChange: (spend: SpendProfile) => void;
}

interface SliderConfig {
  key: keyof SpendProfile;
  label: string;
  max: number;
  step: number;
  icon: React.ReactNode;
  color: string;
}

export default function SpendingSliders({ spend, onChange }: SpendingSlidersProps) {
  const sliders: SliderConfig[] = [
    { key: "Grocery", label: "Groceries", max: 1500, step: 25, icon: <ShoppingCart size={16} />, color: colors.green },
    { key: "Gas", label: "Gas & Fuel", max: 800, step: 25, icon: <Fuel size={16} />, color: colors.amber },
    { key: "Dining", label: "Dining & Delivery", max: 1000, step: 25, icon: <Utensils size={16} />, color: colors.canadaRed },
    { key: "Transit", label: "Transit & Ride", max: 600, step: 20, icon: <Car size={16} />, color: colors.teal },
    { key: "Travel", label: "Travel & Booking", max: 2000, step: 50, icon: <Plane size={16} />, color: colors.navy },
    { key: "Recurring", label: "Recurring Bills", max: 1000, step: 25, icon: <CreditCard size={16} />, color: "#8b5cf6" },
    { key: "Other", label: "Other Expenses", max: 1500, step: 50, icon: <Layers size={16} />, color: colors.muted }
  ];

  const handleSliderChange = (key: keyof SpendProfile, value: number) => {
    onChange({
      ...spend,
      [key]: value
    });
  };

  const totalMonthlySpend = Object.values(spend).reduce((a, b) => a + b, 0);

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h3 style={titleStyle}>Customize Your Monthly Spend</h3>
          <p style={subtitleStyle}>Drag the sliders to match your household budget</p>
        </div>
        <div style={totalContainerStyle}>
          <span style={totalLabelStyle}>TOTAL SPEND</span>
          <span style={totalValueStyle}>${totalMonthlySpend.toLocaleString()}/mo</span>
        </div>
      </div>

      <div style={gridStyle}>
        {sliders.map((s) => (
          <div key={s.key} style={sliderCardStyle}>
            <div style={sliderHeaderStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ ...iconWrapperStyle, color: s.color, backgroundColor: `${s.color}15` }}>
                  {s.icon}
                </div>
                <span style={sliderLabelStyle}>{s.label}</span>
              </div>
              <span style={sliderValueStyle}>${spend[s.key]}/mo</span>
            </div>
            
            <input
              type="range"
              min="0"
              max={s.max}
              step={s.step}
              value={spend[s.key]}
              onChange={(e) => handleSliderChange(s.key, parseInt(e.target.value))}
              style={{
                ...rangeInputStyle,
                background: `linear-gradient(to right, ${s.color} 0%, ${s.color} ${(spend[s.key] / s.max) * 100}%, #e2e8f0 ${(spend[s.key] / s.max) * 100}%, #e2e8f0 100%)`
              } as any}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline Styles for Modern Premium Glassmorphic Design using Brand Tokens
const containerStyle: React.CSSProperties = {
  backgroundColor: colors.white,
  borderRadius: "16px",
  border: `1px solid ${colors.border}`,
  padding: "24px",
  boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
  fontFamily: fonts.sans,
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  marginBottom: "24px",
  borderBottom: `1px solid ${colors.borderFaint}`,
  paddingBottom: "16px"
};

const titleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "800",
  color: colors.inkStrong,
  margin: 0
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "13px",
  color: colors.inkMuted,
  margin: "4px 0 0 0"
};

const totalContainerStyle: React.CSSProperties = {
  backgroundColor: "rgba(31,32,36,0.03)",
  borderRadius: "12px",
  padding: "8px 16px",
  textAlign: "right",
  border: `1px solid ${colors.border}`
};

const totalLabelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: "800",
  color: colors.inkMuted,
  letterSpacing: "0.8px"
};

const totalValueStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "900",
  color: colors.inkStrong
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "20px"
};

const sliderCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(31,32,36,0.02)",
  border: `1px solid ${colors.borderFaint}`,
  borderRadius: "12px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const sliderHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const iconWrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  borderRadius: "8px"
};

const sliderLabelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "700",
  color: colors.ink
};

const sliderValueStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "800",
  color: colors.inkStrong
};

const rangeInputStyle: React.CSSProperties = {
  WebkitAppearance: "none",
  appearance: "none",
  width: "100%",
  height: "6px",
  borderRadius: "3px",
  outline: "none",
  cursor: "pointer",
  margin: "8px 0"
};
