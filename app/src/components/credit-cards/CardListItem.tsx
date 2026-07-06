"use client";

import React from "react";
import ScoreGauge from "./ScoreGauge";
import { colors, fonts } from "@/styles/tokens";
import { CheckCircle2, XCircle, ArrowRight, ExternalLink } from "lucide-react";

interface CardListItemProps {
  card: {
    id: string;
    name: string;
    slug: string;
    network: string;
    cardType: string;
    level: string | null;
    annualFee: number;
    firstYearFeeWaived: boolean;
    interestPurchase: number;
    recommendedCreditScore: string;
    welcomeBonusText: string | null;
    welcomeBonusValue: number;
    applyUrl: string;
    prosJson: string;
    consJson: string;
    issuer: {
      name: string;
      logoUrl: string | null;
    };
  };
  calculatedScore: number;
  firstYearValue: number;
  ongoingValue: number;
  isFirstYearMode: boolean; // toggle from parent
}

export default function CardListItem({
  card,
  calculatedScore,
  firstYearValue,
  ongoingValue,
  isFirstYearMode
}: CardListItemProps) {
  const pros: string[] = JSON.parse(card.prosJson || "[]");
  const cons: string[] = JSON.parse(card.consJson || "[]");

  // Custom visual background gradient for the credit card art mockup based on slug/issuer
  let cardGradient = "linear-gradient(135deg, #1f2024 0%, #121214 100%)"; // default ink-charcoal
  if (card.slug.includes("cobalt")) {
    cardGradient = `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`; // Cobalt brand gradient
  } else if (card.slug.includes("gold")) {
    cardGradient = `linear-gradient(135deg, ${colors.amber} 0%, #7c2d12 100%)`; // Amber gold gradient
  } else if (card.slug.includes("aeroplan")) {
    cardGradient = "linear-gradient(135deg, #0d9488 0%, #115e59 100%)"; // Aeroplan Teal
  } else if (card.slug.includes("bmo")) {
    cardGradient = `linear-gradient(135deg, #0284c7 0%, ${colors.navy} 100%)`; // BMO Blue
  } else if (card.slug.includes("rogers")) {
    cardGradient = `linear-gradient(135deg, ${colors.canadaRed} 0%, #7f1d1d 100%)`; // Rogers Canada Red
  } else if (card.slug.includes("neo")) {
    cardGradient = "linear-gradient(135deg, #c026d3 0%, #701a75 100%)"; // Neo Magenta
  } else if (card.slug.includes("wealthsimple")) {
    cardGradient = "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"; // WS Slate
  }

  const netValue = isFirstYearMode ? firstYearValue : ongoingValue;

  return (
    <div style={cardItemStyle}>
      {/* 1. Credit Card Visual Art */}
      <div style={leftSectionStyle}>
        <div style={{ ...cardArtStyle, background: cardGradient }}>
          <div style={cardArtHeaderStyle}>
            <span style={cardArtIssuerStyle}>{card.issuer.name.replace(" Canada", "")}</span>
            <span style={cardArtNetworkStyle}>{card.network}</span>
          </div>
          <div style={cardArtBodyStyle}>
            <div style={cardChipStyle} />
            <span style={cardArtNameStyle}>{card.name}</span>
          </div>
          <div style={cardArtFooterStyle}>
            <span style={cardArtNumberStyle}>•••• •••• •••• 2026</span>
          </div>
        </div>
      </div>

      {/* 2. Card Metadata & Scoring */}
      <div style={middleSectionStyle}>
        <div style={metaHeaderStyle}>
          <div>
            <span style={issuerLabelStyle}>{card.issuer.name}</span>
            <h2 style={cardNameStyle}>{card.name}</h2>
            <div style={badgeContainerStyle}>
              <span style={badgeStyle}>{card.network}</span>
              <span style={badgeStyle}>{card.cardType}</span>
              {card.level && <span style={{ ...badgeStyle, backgroundColor: "rgba(31,32,36,0.06)", color: colors.ink }}>{card.level}</span>}
            </div>
          </div>
          {/* Score Gauge */}
          <div style={scoreGaugeWrapperStyle}>
            <ScoreGauge score={calculatedScore} size={65} strokeWidth={5} />
          </div>
        </div>

        {/* Welcome Bonus & Highlights */}
        {card.welcomeBonusText && (
          <div style={offerBoxStyle}>
            <span style={offerBadgeStyle}>WELCOME OFFER</span>
            <p style={offerTextStyle}>{card.welcomeBonusText}</p>
          </div>
        )}

        {/* Pros & Cons List */}
        <div style={prosConsGridStyle}>
          <div>
            <span style={listTitleStyle}>PROS</span>
            <ul style={listStyle}>
              {pros.slice(0, 2).map((pro, idx) => (
                <li key={idx} style={proItemStyle}>
                  <CheckCircle2 size={14} color={colors.green} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span style={listTitleStyle}>CONS</span>
            <ul style={listStyle}>
              {cons.slice(0, 2).map((con, idx) => (
                <li key={idx} style={conItemStyle}>
                  <XCircle size={14} color={colors.red} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Financial Metrics & Call to Actions */}
      <div style={rightSectionStyle}>
        <div style={financialsBoxStyle}>
          <div style={netValueBoxStyle}>
            <span style={netValueLabelStyle}>
              {isFirstYearMode ? "FIRST YEAR VALUE" : "ONGOING ANNUAL VALUE"}
            </span>
            <span style={{ ...netValueValueStyle, color: netValue >= 0 ? colors.green : colors.red }}>
              {netValue >= 0 ? "+" : ""}${netValue.toLocaleString()}
            </span>
          </div>

          <div style={quickStatsGridStyle}>
            <div style={statItemStyle}>
              <span style={statLabelStyle}>Annual Fee</span>
              <span style={statValueStyle}>
                {card.annualFee === 0 ? (
                  <span style={{ color: colors.green, fontWeight: "800" }}>$0</span>
                ) : (
                  `$${card.annualFee}`
                )}
                {card.firstYearFeeWaived && isFirstYearMode && (
                  <span style={waivedBadgeStyle}>Waived</span>
                )}
              </span>
            </div>
            <div style={statItemStyle}>
              <span style={statLabelStyle}>Interest (Purch)</span>
              <span style={statValueStyle}>{card.interestPurchase}%</span>
            </div>
            <div style={statItemStyle}>
              <span style={statLabelStyle}>Credit Level</span>
              <span style={statValueStyle}>{card.recommendedCreditScore}</span>
            </div>
          </div>
        </div>

        <div style={actionsContainerStyle}>
          <a
            href={card.applyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={primaryBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.tealHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.teal;
            }}
          >
            Apply Now
            <ExternalLink size={14} style={{ marginLeft: "6px" }} />
          </a>
          <a
            href={`/coming-soon?product=credit-cards&card=${card.slug}`}
            style={secondaryBtnStyle}
          >
            Read Review
            <ArrowRight size={14} style={{ marginLeft: "6px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Visual CSS Styling for High-Fidelity Cards using Brand Design Tokens
const cardItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "20px",
  boxShadow: "0 4px 15px -3px rgba(15, 23, 42, 0.03)",
  fontFamily: fonts.sans,
  transition: "all 0.3s ease",
  flexWrap: "wrap",
  width: "100%"
};

const leftSectionStyle: React.CSSProperties = {
  flex: "0 0 240px",
  padding: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: `1px solid ${colors.border}`,
  backgroundColor: "rgba(31,32,36,0.01)",
  minWidth: "240px"
};

const cardArtStyle: React.CSSProperties = {
  width: "190px",
  height: "120px",
  borderRadius: "8px",
  padding: "12px",
  color: "#ffffff",
  boxShadow: "0 8px 16px -4px rgba(15, 23, 42, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  letterSpacing: "0.5px"
};

const cardArtHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start"
};

const cardArtIssuerStyle: React.CSSProperties = {
  fontSize: "8px",
  fontWeight: "800",
  textTransform: "uppercase",
  opacity: 0.9,
  fontFamily: fonts.sans
};

const cardArtNetworkStyle: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: "900",
  fontStyle: "italic",
  fontFamily: fonts.sans
};

const cardArtBodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px"
};

const cardChipStyle: React.CSSProperties = {
  width: "22px",
  height: "16px",
  backgroundColor: "#fbbf24",
  borderRadius: "3px",
  opacity: 0.8
};

const cardArtNameStyle: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: "700",
  maxWidth: "160px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontFamily: fonts.sans
};

const cardArtFooterStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end"
};

const cardArtNumberStyle: React.CSSProperties = {
  fontSize: "8px",
  fontFamily: "monospace",
  opacity: 0.8
};

const middleSectionStyle: React.CSSProperties = {
  flex: "1",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  minWidth: "300px"
};

const metaHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px"
};

const issuerLabelStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "800",
  color: colors.inkMuted,
  textTransform: "uppercase",
  letterSpacing: "0.5px"
};

const cardNameStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "800",
  color: colors.inkStrong,
  margin: "2px 0 6px 0",
  lineHeight: 1.2
};

const badgeContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "6px",
  flexWrap: "wrap"
};

const badgeStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "700",
  padding: "2px 8px",
  borderRadius: "9999px",
  backgroundColor: "rgba(10,126,140,0.06)",
  color: colors.teal,
  textTransform: "uppercase"
};

const scoreGaugeWrapperStyle: React.CSSProperties = {
  flexShrink: 0
};

const offerBoxStyle: React.CSSProperties = {
  backgroundColor: "#fef3c7",
  border: `1px dashed ${colors.amber}`,
  borderRadius: "8px",
  padding: "10px 12px",
  display: "flex",
  flexDirection: "column",
  gap: "2px"
};

const offerBadgeStyle: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: "800",
  color: colors.amber,
  letterSpacing: "0.5px"
};

const offerTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#78350f",
  margin: 0,
  fontWeight: "600",
  lineHeight: "1.4"
};

const prosConsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  borderTop: `1px solid ${colors.border}`,
  paddingTop: "16px"
};

const listTitleStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "800",
  color: colors.inkMuted,
  letterSpacing: "0.5px",
  display: "block",
  marginBottom: "8px"
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "6px"
};

const proItemStyle: React.CSSProperties = {
  display: "flex",
  gap: "6px",
  fontSize: "12px",
  color: colors.ink,
  alignItems: "flex-start",
  lineHeight: "1.3"
};

const conItemStyle: React.CSSProperties = {
  display: "flex",
  gap: "6px",
  fontSize: "12px",
  color: colors.ink,
  alignItems: "flex-start",
  lineHeight: "1.3"
};

const rightSectionStyle: React.CSSProperties = {
  flex: "0 0 250px",
  padding: "24px",
  backgroundColor: colors.subtleBg,
  borderLeft: `1px solid ${colors.border}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
  minWidth: "250px"
};

const financialsBoxStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

const netValueBoxStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: "10px",
  padding: "12px"
};

const netValueLabelStyle: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: "800",
  color: colors.inkMuted,
  letterSpacing: "0.5px",
  display: "block",
  marginBottom: "2px"
};

const netValueValueStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "900",
  letterSpacing: "-0.5px"
};

const quickStatsGridStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const statItemStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "12px"
};

const statLabelStyle: React.CSSProperties = {
  color: colors.inkMuted,
  fontWeight: "500"
};

const statValueStyle: React.CSSProperties = {
  color: colors.inkStrong,
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  gap: "4px"
};

const waivedBadgeStyle: React.CSSProperties = {
  fontSize: "8px",
  fontWeight: "700",
  color: colors.green,
  backgroundColor: "rgba(13,128,80,0.06)",
  padding: "1px 4px",
  borderRadius: "4px",
  textTransform: "uppercase"
};

const actionsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const primaryBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.teal,
  color: colors.white,
  fontSize: "13px",
  fontWeight: "700",
  padding: "10px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.2s ease"
};

const secondaryBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  color: colors.ink,
  fontSize: "13px",
  fontWeight: "700",
  padding: "10px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.2s ease"
};
