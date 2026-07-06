"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SpendingSliders from "./SpendingSliders";
import CardListItem from "./CardListItem";
import { DEFAULT_CANADIAN_SPEND_PROFILE, calculateNetCardValue, calculateTopRatesScore, SpendProfile } from "@/lib/scoring";
import { colors, fonts } from "@/styles/tokens";
import { Sliders, Filter, ArrowUpDown, RefreshCw, Award, ShieldCheck, Heart } from "lucide-react";

interface CreditCardHubProps {
  initialCards: any[];
  categories: any[];
  issuers: any[];
}

export default function CreditCardHub({
  initialCards,
  categories,
  issuers
}: CreditCardHubProps) {
  // URL params let the nav (MegaNav "By Reward Type" / "By Issuer" items)
  // deep-link straight into a pre-filtered hub. Validated against the
  // categories/issuers arrays so a stale or hand-typed param doesn't
  // produce an empty grid; falls back to "All" if not found.
  const searchParams = useSearchParams();
  const initialCategory = useMemo(() => {
    const v = searchParams?.get("category");
    return v && categories.some((c) => c.id === v) ? v : "All";
  }, [searchParams, categories]);
  const initialIssuer = useMemo(() => {
    const v = searchParams?.get("issuer");
    return v && issuers.some((i) => i.id === v) ? v : "All";
  }, [searchParams, issuers]);
  const initialNetwork = useMemo(() => {
    const v = searchParams?.get("network");
    return v && ["Visa", "Mastercard", "Amex"].includes(v) ? v : "All";
  }, [searchParams]);

  // 1. Client State
  const [spend, setSpend] = useState<SpendProfile>(DEFAULT_CANADIAN_SPEND_PROFILE);
  const [isFirstYearMode, setIsFirstYearMode] = useState<boolean>(false);
  const [selectedNetwork, setSelectedNetwork] = useState<string>(initialNetwork);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedIssuer, setSelectedIssuer] = useState<string>(initialIssuer);
  const [sortBy, setSortBy] = useState<string>("score"); // score, netValue, fee

  // If the user navigates between two filtered nav items without a full
  // page reload (App Router client transition), useSearchParams updates
  // but useState initializers don't re-run — sync filter state to URL.
  useEffect(() => { setSelectedCategory(initialCategory); }, [initialCategory]);
  useEffect(() => { setSelectedIssuer(initialIssuer); }, [initialIssuer]);
  useEffect(() => { setSelectedNetwork(initialNetwork); }, [initialNetwork]);

  // 2. Real-time Recalculation & Filtering
  const processedCards = useMemo(() => {
    return initialCards
      .map((card) => {
        const firstYearValue = calculateNetCardValue(card, spend, true);
        const ongoingValue = calculateNetCardValue(card, spend, false);
        const calculatedScore = calculateTopRatesScore(card, spend);

        return {
          ...card,
          calculatedScore,
          firstYearValue,
          ongoingValue
        };
      })
      .filter((card) => {
        // Network filter
        if (selectedNetwork !== "All" && card.network.toUpperCase() !== selectedNetwork.toUpperCase()) {
          return false;
        }
        // Issuer filter
        if (selectedIssuer !== "All" && card.issuer.id !== selectedIssuer) {
          return false;
        }
        // Category filter
        if (selectedCategory !== "All") {
          const hasCategory = card.categories.some((cat: any) => cat.id === selectedCategory);
          if (!hasCategory) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "score") {
          return b.calculatedScore - a.calculatedScore;
        } else if (sortBy === "netValue") {
          const valA = isFirstYearMode ? a.firstYearValue : a.ongoingValue;
          const valB = isFirstYearMode ? b.firstYearValue : b.ongoingValue;
          return valB - valA;
        } else if (sortBy === "fee") {
          return a.annualFee - b.annualFee;
        }
        return 0;
      });
  }, [initialCards, spend, selectedNetwork, selectedCategory, selectedIssuer, sortBy, isFirstYearMode]);

  // Reset Sliders
  const resetSpendSliders = () => {
    setSpend(DEFAULT_CANADIAN_SPEND_PROFILE);
  };

  return (
    <div style={hubWrapperStyle}>
      {/* Hero Header Section */}
      <div style={heroSectionStyle}>
        <span style={heroBadgeStyle}>100% INDEPENDENT CANADIAN CARD COMPARISON</span>
        <h1 style={heroTitleStyle}>Find the Perfect Credit Card</h1>
        <p style={heroSubStyle}>
          Our dynamic algorithm calculates your exact annual earnings in CAD based on your monthly spending profile. Adjust the sliders below to see your personalized net value and score for each card.
        </p>
      </div>

      {/* Trust Depth Block — surfaces the dimensional rigor behind every score */}
      <section style={trustBlockStyle} aria-labelledby="trust-block-title">
        <div style={trustBlockHeaderStyle}>
          <ShieldCheck size={14} color={colors.teal} />
          <span style={trustBlockEyebrowStyle}>Behind every score</span>
        </div>
        <h2 id="trust-block-title" style={trustBlockTitleStyle}>
          Same algorithm. Every card. No editor&rsquo;s picks.
        </h2>
        <div style={trustStatsGridStyle}>
          <div style={trustStatTileStyle}>
            <div style={trustStatNumberStyle}>21</div>
            <div style={trustStatLabelStyle}>Canadian reward programs valued in CAD</div>
          </div>
          <div style={trustStatTileStyle}>
            <div style={trustStatNumberStyle}>8</div>
            <div style={trustStatLabelStyle}>Spend categories scored per card</div>
          </div>
          <div style={trustStatTileStyle}>
            <div style={trustStatNumberStyle}>5</div>
            <div style={trustStatLabelStyle}>Insurance coverage types weighted</div>
          </div>
          <div style={trustStatTileStyle}>
            <div style={trustStatNumberStyle}>4</div>
            <div style={trustStatLabelStyle}>Premium perks evaluated</div>
          </div>
          <div style={trustStatTileStyle}>
            <div style={trustStatNumberStyle}>{initialCards.length}</div>
            <div style={trustStatLabelStyle}>Canadian personal cards scored</div>
          </div>
        </div>
        <div style={trustBlockFooterStyle}>
          <span>
            Score weights: <strong style={{ color: colors.inkStrong }}>40%</strong> net rewards ·{" "}
            <strong style={{ color: colors.inkStrong }}>20%</strong> fees ·{" "}
            <strong style={{ color: colors.inkStrong }}>20%</strong> insurance ·{" "}
            <strong style={{ color: colors.inkStrong }}>15%</strong> perks ·{" "}
            <strong style={{ color: colors.inkStrong }}>5%</strong> accessibility.
          </span>
          <a href="/credit-cards/methodology" style={trustBlockLinkStyle}>
            See full methodology &rarr;
          </a>
        </div>
      </section>

      {/* Main Interactive Controls: Sliders Panel */}
      <div style={slidersPanelStyle}>
        <SpendingSliders spend={spend} onChange={setSpend} />
        <div style={resetButtonWrapperStyle}>
          <button onClick={resetSpendSliders} style={resetBtnStyle}>
            <RefreshCw size={14} style={{ marginRight: "6px" }} />
            Reset to Canadian Average Spend
          </button>
        </div>
      </div>

      {/* Dynamic Summary Bar & Filter System */}
      <div style={mainContentLayoutStyle}>
        {/* Sidebar Filters */}
        <div style={sidebarStyle}>
          <div style={sidebarHeaderStyle}>
            <Filter size={16} color={colors.teal} />
            <h3 style={sidebarTitleStyle}>Narrow Down Offers</h3>
          </div>

          {/* Network Filter */}
          <div style={filterGroupStyle}>
            <label style={filterLabelStyle}>Card Network</label>
            <div style={selectWrapperStyle}>
              <select
                value={selectedNetwork}
                onChange={(e) => setSelectedNetwork(e.target.value)}
                style={selectStyle}
              >
                <option value="All">All Networks (Visa, MC, Amex)</option>
                <option value="Visa">Visa Only</option>
                <option value="Mastercard">Mastercard Only</option>
                <option value="AMEX">American Express Only</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div style={filterGroupStyle}>
            <label style={filterLabelStyle}>Rewards Category</label>
            <div style={selectWrapperStyle}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={selectStyle}
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Issuer Filter */}
          <div style={filterGroupStyle}>
            <label style={filterLabelStyle}>Bank / Issuer</label>
            <div style={selectWrapperStyle}>
              <select
                value={selectedIssuer}
                onChange={(e) => setSelectedIssuer(e.target.value)}
                style={selectStyle}
              >
                <option value="All">All Issuers</option>
                {issuers.map((iss) => (
                  <option key={iss.id} value={iss.id}>
                    {iss.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick FAQ / Methodology Sidebar Callout */}
          <div style={methodologyCalloutStyle}>
            <Award size={20} color={colors.teal} style={{ marginBottom: "8px" }} />
            <h4 style={calloutTitleStyle}>Our Scoring Method</h4>
            <p style={calloutTextStyle}>
              Each card is evaluated out of 5.0 based on 40% Net Rewards Value, 20% Insurance Suite, 20% Low Fees, 15% Premium Perks, and 5% Ease of Approval.
            </p>
          </div>
        </div>

        {/* Results List Section */}
        <div style={resultsContainerStyle}>
          {/* Sorting / View Toggles Bar */}
          <div style={sortBarStyle}>
            <div style={resultsCountStyle}>
              Showing <strong style={{ color: colors.inkStrong }}>{processedCards.length}</strong> matching credit cards
            </div>

            <div style={togglesGroupStyle}>
              {/* Value Mode Toggle */}
              <div style={modeToggleContainerStyle}>
                <button
                  onClick={() => setIsFirstYearMode(false)}
                  style={{
                    ...modeToggleBtnStyle,
                    backgroundColor: !isFirstYearMode ? colors.navy : "transparent",
                    color: !isFirstYearMode ? colors.white : colors.inkMuted
                  }}
                >
                  Ongoing Value
                </button>
                <button
                  onClick={() => setIsFirstYearMode(true)}
                  style={{
                    ...modeToggleBtnStyle,
                    backgroundColor: isFirstYearMode ? colors.navy : "transparent",
                    color: isFirstYearMode ? colors.white : colors.inkMuted
                  }}
                >
                  First Year (Inc. Bonus)
                </button>
              </div>

              {/* Sort Dropdown */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ArrowUpDown size={14} color={colors.inkMuted} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={sortSelectStyle}
                >
                  <option value="score">Sort by: TopRates Score</option>
                  <option value="netValue">Sort by: Net Value (CAD)</option>
                  <option value="fee">Sort by: Lowest Annual Fee</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cards Loop */}
          {processedCards.length > 0 ? (
            <div style={cardsListStyle}>
              {processedCards.map((card) => (
                <CardListItem
                  key={card.id}
                  card={card}
                  calculatedScore={card.calculatedScore}
                  firstYearValue={card.firstYearValue}
                  ongoingValue={card.ongoingValue}
                  isFirstYearMode={isFirstYearMode}
                />
              ))}
            </div>
          ) : (
            <div style={noResultsStyle}>
              <h3 style={{ fontWeight: "800", color: colors.inkStrong, marginBottom: "8px" }}>No Credit Cards Match Your Filters</h3>
              <p style={{ color: colors.inkMuted, fontSize: "14px", marginBottom: "16px" }}>Try resetting your category or issuer filters to view premium options.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedIssuer("All");
                  setSelectedNetwork("All");
                }}
                style={resetFiltersBtnStyle}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Interactive Hub Layout Styles using Brand Design Tokens
const hubWrapperStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px",
  fontFamily: fonts.sans,
  color: colors.ink
};

const heroSectionStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px"
};

const heroBadgeStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "1px",
  color: colors.teal,
  backgroundColor: "rgba(10,126,140,0.06)",
  padding: "4px 12px",
  borderRadius: "9999px",
  textTransform: "uppercase"
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "800",
  color: colors.navy,
  fontFamily: fonts.display,
  margin: 0,
  letterSpacing: "-0.5px"
};

const heroSubStyle: React.CSSProperties = {
  fontSize: "16px",
  color: colors.inkMuted,
  maxWidth: "800px",
  margin: 0,
  lineHeight: "1.5"
};

const trustBlockStyle: React.CSSProperties = {
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: "16px",
  padding: "28px 28px 24px",
  marginBottom: "32px",
  boxShadow: "0 1px 2px rgba(15,23,42,0.04)"
};

const trustBlockHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "10px"
};

const trustBlockEyebrowStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: colors.teal
};

const trustBlockTitleStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "800",
  color: colors.navy,
  fontFamily: fonts.display,
  margin: "0 0 22px 0",
  letterSpacing: "-0.3px",
  lineHeight: "1.25"
};

const trustStatsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "20px",
  paddingBottom: "20px",
  borderBottom: `1px solid ${colors.border}`
};

const trustStatTileStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px"
};

const trustStatNumberStyle: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: "800",
  color: colors.navy,
  fontFamily: fonts.display,
  lineHeight: "1",
  letterSpacing: "-1px"
};

const trustStatLabelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: colors.inkMuted,
  lineHeight: "1.35"
};

const trustBlockFooterStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "16px",
  fontSize: "12px",
  color: colors.inkMuted,
  lineHeight: "1.5"
};

const trustBlockLinkStyle: React.CSSProperties = {
  color: colors.teal,
  fontWeight: "800",
  fontSize: "12px",
  textDecoration: "none",
  whiteSpace: "nowrap"
};

const slidersPanelStyle: React.CSSProperties = {
  marginBottom: "40px"
};

const resetButtonWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "12px"
};

const resetBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "700",
  color: colors.teal,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "4px 8px"
};

const mainContentLayoutStyle: React.CSSProperties = {
  display: "flex",
  gap: "32px",
  flexWrap: "wrap"
};

const sidebarStyle: React.CSSProperties = {
  flex: "0 0 280px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  minWidth: "280px"
};

const sidebarHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: colors.navy,
  borderBottom: `1px solid ${colors.border}`,
  paddingBottom: "12px"
};

const sidebarTitleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "800",
  margin: 0
};

const filterGroupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px"
};

const filterLabelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "800",
  color: colors.inkMuted
};

const selectWrapperStyle: React.CSSProperties = {
  position: "relative",
  width: "100%"
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.white,
  color: colors.inkStrong,
  fontSize: "13px",
  fontWeight: "600",
  outline: "none",
  cursor: "pointer",
  appearance: "none"
};

const methodologyCalloutStyle: React.CSSProperties = {
  backgroundColor: "rgba(10,126,140,0.03)",
  border: `1px solid ${colors.border}`,
  borderRadius: "12px",
  padding: "16px",
  marginTop: "16px"
};

const calloutTitleStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "800",
  color: colors.teal,
  margin: "0 0 4px 0"
};

const calloutTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: colors.ink,
  margin: 0,
  lineHeight: "1.4"
};

const resultsContainerStyle: React.CSSProperties = {
  flex: "1",
  minWidth: "300px"
};

const sortBarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  marginBottom: "20px",
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: "12px",
  padding: "12px 16px"
};

const resultsCountStyle: React.CSSProperties = {
  fontSize: "13px",
  color: colors.inkMuted
};

const togglesGroupStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  flexWrap: "wrap"
};

const modeToggleContainerStyle: React.CSSProperties = {
  display: "flex",
  backgroundColor: "rgba(31,32,36,0.04)",
  borderRadius: "8px",
  padding: "3px"
};

const modeToggleBtnStyle: React.CSSProperties = {
  border: "none",
  borderRadius: "6px",
  fontSize: "11px",
  fontWeight: "700",
  padding: "6px 12px",
  cursor: "pointer",
  transition: "all 0.2s ease"
};

const sortSelectStyle: React.CSSProperties = {
  border: "none",
  backgroundColor: "transparent",
  fontSize: "13px",
  fontWeight: "700",
  color: colors.inkStrong,
  outline: "none",
  cursor: "pointer"
};

const cardsListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};

const noResultsStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "60px 20px",
  border: `2px dashed ${colors.border}`,
  borderRadius: "16px",
  backgroundColor: colors.white
};

const resetFiltersBtnStyle: React.CSSProperties = {
  backgroundColor: colors.teal,
  color: colors.white,
  border: "none",
  borderRadius: "8px",
  fontWeight: "700",
  fontSize: "13px",
  padding: "10px 20px",
  cursor: "pointer",
  marginTop: "12px"
};
