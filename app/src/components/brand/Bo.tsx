'use client';

import { useId } from 'react';

export type BoPose =
  | 'idle' | 'wave' | 'wink' | 'thumbs' | 'clipboard'
  | 'point' | 'tag' | 'thinking' | 'sleep' | 'celebrate';

export type BoAccessory = 'hardhat' | 'shield' | 'none';

type BoEyes = 'open' | 'closed' | 'smile' | 'wink';
type BoMouth = 'teeth' | 'smile' | 'o';

export interface BoPalette {
  fur: string;
  furShade: string;
  belly: string;
  muzzle: string;
  dark: string;
  tailLight: string;
  ink: string;
  white: string;
  tooth: string;
  toothLine: string;
  blush: string;
  gold: string;
  green: string;
  teal: string;
}

export const BO_PALETTE: BoPalette = {
  fur: '#8B5A2B',
  furShade: '#724a24',
  belly: '#c98a56',
  muzzle: '#e4b98a',
  dark: '#3a2414',
  tailLight: '#7a4f30',
  ink: '#1B2A4A',
  white: '#ffffff',
  tooth: '#faf3e3',
  toothLine: '#d9c9a5',
  blush: '#e89a7a',
  gold: '#B8960C',
  green: '#0D8050',
  teal: '#0A7E8C',
};

interface BoBaseProps {
  palette?: BoPalette;
  outline?: boolean;
  blush?: boolean;
  eyes?: BoEyes;
  mouth?: BoMouth;
  extraBack?: React.ReactNode;
  extraFront?: React.ReactNode;
  tail?: boolean;
  handLeft?: React.ReactNode | null;
  handRight?: React.ReactNode | null;
  accessory?: BoAccessory;
}

function BoBase({
  palette = BO_PALETTE,
  outline = true,
  blush = true,
  eyes = 'open',
  mouth = 'teeth',
  extraBack = null,
  extraFront = null,
  tail = true,
  handLeft = null,
  handRight = null,
  accessory = 'hardhat',
}: BoBaseProps) {
  const p = palette;
  const stroke = outline ? p.ink : 'none';
  const sw = outline ? 1.2 : 0;

  const Hardhat = () => (
    <g>
      <ellipse cx="50" cy="18" rx="26" ry="4" fill={p.gold} stroke={stroke} strokeWidth={sw} />
      <path d="M30 18 Q30 4 50 4 Q70 4 70 18 Z" fill={p.gold} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <rect x="48.5" y="5" width="3" height="13" rx="0.8" fill="#d4b01a" />
      <path d="M38 10 Q44 6 50 6" stroke="#e8c84a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <circle cx="50" cy="14" r="2.4" fill={p.ink} />
      <text x="50" y="15.3" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="3" fill={p.gold}>TR</text>
    </g>
  );

  const Shield = () => (
    <g transform="translate(66 58)">
      <path d="M0 -10 L16 -10 L16 4 Q16 14 8 18 Q0 14 0 4 Z" fill={p.gold} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M4 -2 L7 1 L12 -5" stroke={p.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 -7 L14 -7" stroke="#d4b01a" strokeWidth="0.8" opacity="0.6" />
    </g>
  );

  return (
    <g>
      {extraBack}

      {tail && (
        <g className="bo-tail" transform="translate(78 78) rotate(28)">
          <ellipse cx="0" cy="0" rx="13" ry="8.5" fill={p.dark} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <ellipse cx="0" cy="-0.5" rx="9" ry="5" fill={p.tailLight} />
          <line x1="-6" y1="-2" x2="-2" y2="2" stroke={p.dark} strokeWidth="0.35" opacity="0.6" />
          <line x1="-3" y1="-3" x2="1"  y2="1" stroke={p.dark} strokeWidth="0.35" opacity="0.6" />
          <line x1="0"  y1="-3" x2="4"  y2="1" stroke={p.dark} strokeWidth="0.35" opacity="0.6" />
          <line x1="3"  y1="-2" x2="7"  y2="2" stroke={p.dark} strokeWidth="0.35" opacity="0.6" />
        </g>
      )}

      <ellipse cx="38" cy="90" rx="7.5" ry="3.5" fill={p.furShade} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="62" cy="90" rx="7.5" ry="3.5" fill={p.furShade} stroke={stroke} strokeWidth={sw} />

      <path d="M18 62 Q18 40 50 40 Q82 40 82 62 Q82 92 50 92 Q18 92 18 62 Z"
            fill={p.fur} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <ellipse cx="50" cy="72" rx="20" ry="15" fill={p.belly} />

      {handLeft === null
        ? <ellipse cx="21" cy="63" rx="6.5" ry="10" fill={p.fur} stroke={stroke} strokeWidth={sw} transform="rotate(-12 21 63)" />
        : handLeft}
      {handRight === null
        ? <ellipse cx="79" cy="63" rx="6.5" ry="10" fill={p.fur} stroke={stroke} strokeWidth={sw} transform="rotate(12 79 63)" />
        : handRight}

      <g className="bo-head">
        <ellipse cx="27" cy="25" rx="6.5" ry="7" fill={p.fur} stroke={stroke} strokeWidth={sw} />
        <ellipse cx="73" cy="25" rx="6.5" ry="7" fill={p.fur} stroke={stroke} strokeWidth={sw} />
        <ellipse cx="27" cy="26" rx="3" ry="3.4" fill={p.dark} />
        <ellipse cx="73" cy="26" rx="3" ry="3.4" fill={p.dark} />

        <path d="M24 40 Q24 16 50 16 Q76 16 76 40 Q76 60 50 60 Q24 60 24 40 Z"
              fill={p.fur} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <ellipse cx="50" cy="48" rx="14" ry="10" fill={p.muzzle} />

        {blush && (
          <g>
            <circle cx="32" cy="46" r="2.8" fill={p.blush} opacity="0.5" />
            <circle cx="68" cy="46" r="2.8" fill={p.blush} opacity="0.5" />
          </g>
        )}

        {eyes === 'open' && (
          <g>
            <circle cx="40" cy="38" r="4.2" fill={p.white} stroke={stroke} strokeWidth={sw * 0.7} />
            <circle cx="60" cy="38" r="4.2" fill={p.white} stroke={stroke} strokeWidth={sw * 0.7} />
            <circle cx="41" cy="39" r="2.4" fill={p.ink} />
            <circle cx="61" cy="39" r="2.4" fill={p.ink} />
            <circle cx="42" cy="38" r="0.9" fill={p.white} />
            <circle cx="62" cy="38" r="0.9" fill={p.white} />
          </g>
        )}
        {eyes === 'closed' && (
          <g stroke={p.ink} strokeWidth="1.4" strokeLinecap="round" fill="none">
            <path d="M36 38 Q40 35 44 38" />
            <path d="M56 38 Q60 35 64 38" />
          </g>
        )}
        {eyes === 'smile' && (
          <g stroke={p.ink} strokeWidth="1.4" strokeLinecap="round" fill="none">
            <path d="M36 39 Q40 36 44 39" />
            <path d="M56 39 Q60 36 64 39" />
          </g>
        )}
        {eyes === 'wink' && (
          <g>
            <circle cx="40" cy="38" r="4.2" fill={p.white} stroke={stroke} strokeWidth={sw * 0.7} />
            <circle cx="41" cy="39" r="2.4" fill={p.ink} />
            <circle cx="42" cy="38" r="0.9" fill={p.white} />
            <path d="M56 38 Q60 35 64 38" stroke={p.ink} strokeWidth="1.4" strokeLinecap="round" fill="none" />
          </g>
        )}

        <ellipse cx="50" cy="45.5" rx="2.4" ry="1.7" fill={p.ink} />

        {mouth === 'teeth' && (
          <g>
            <rect x="46.7" y="51" width="6.6" height="6.5" rx="1.2" fill={p.tooth} stroke={stroke} strokeWidth={sw * 0.6} />
            <line x1="50" y1="51.3" x2="50" y2="57.3" stroke={p.toothLine} strokeWidth="0.6" />
          </g>
        )}
        {mouth === 'smile' && (
          <path d="M44 52 Q50 57 56 52" stroke={p.ink} strokeWidth="1.3" strokeLinecap="round" fill="none" />
        )}
        {mouth === 'o' && (
          <ellipse cx="50" cy="54" rx="2" ry="2.3" fill={p.dark} />
        )}
      </g>

      {accessory === 'hardhat' && <Hardhat />}
      {extraFront}
      {accessory === 'shield' && <Shield />}
    </g>
  );
}

interface PoseProps {
  palette?: BoPalette;
  outline?: boolean;
  blush?: boolean;
  accessory?: BoAccessory;
}

function BoIdle(props: PoseProps) { return <BoBase {...props} />; }

function BoWave(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="smile" mouth="smile"
      handRight={
        <g className="bo-wave-hand" transform="translate(82 40) rotate(25)">
          <rect x="-3" y="0" width="6" height="16" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5.5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <path d="M7 -5 Q11 -3 9 1" stroke={p.teal} strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M9 -9 Q14 -7 12 -3" stroke={p.teal} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
        </g>
      }
    />
  );
}

function BoWink(props: PoseProps) { return <BoBase {...props} eyes="wink" mouth="smile" />; }

function BoThumbs(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="wink" mouth="smile"
      handRight={
        <g transform="translate(78 55)">
          <rect x="-3" y="0" width="6" height="12" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5.5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <rect x="-1.5" y="-10" width="3.2" height="6.5" rx="1.6" fill={p.muzzle} stroke={stroke} strokeWidth={sw * 0.8} />
          <g transform="translate(10 -8)" fill={p.gold}>
            <path d="M0 -3 L0.8 -0.8 L3 0 L0.8 0.8 L0 3 L-0.8 0.8 L-3 0 L-0.8 -0.8 Z" />
          </g>
        </g>
      }
    />
  );
}

function BoClipboard(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="open" mouth="smile"
      extraFront={
        <g transform="translate(22 58) rotate(-8)">
          <rect x="0" y="0" width="26" height="32" rx="2" fill={p.ink} stroke={stroke} strokeWidth={sw} />
          <rect x="2" y="4" width="22" height="26" rx="1" fill={p.white} />
          <rect x="9" y="-2" width="8" height="5" rx="1" fill={p.gold} stroke={stroke} strokeWidth={sw * 0.8} />
          <line x1="5"  y1="10" x2="21" y2="10" stroke={p.ink} strokeWidth="0.8" opacity="0.35" />
          <line x1="5"  y1="14" x2="18" y2="14" stroke={p.ink} strokeWidth="0.8" opacity="0.35" />
          <line x1="5"  y1="18" x2="21" y2="18" stroke={p.ink} strokeWidth="0.8" opacity="0.35" />
          <path d="M7 24 L11 27 L19 20" stroke={p.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      }
      handLeft={
        <ellipse cx="22" cy="60" rx="5" ry="7" fill={p.fur} stroke={stroke} strokeWidth={sw} transform="rotate(-8 22 60)" />
      }
    />
  );
}

function BoPoint(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="open" mouth="smile"
      handRight={
        <g transform="translate(82 58) rotate(-15)">
          <rect x="-3" y="-2" width="6" height="11" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <rect x="5" y="-4" width="10" height="3.2" rx="1.4" fill={p.muzzle} stroke={stroke} strokeWidth={sw * 0.8} />
        </g>
      }
    />
  );
}

function BoTag(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="open" mouth="teeth"
      extraFront={
        <g transform="translate(70 58) rotate(12)">
          <path d="M0 0 L18 0 L24 7 L18 14 L0 14 Z" fill={p.teal} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <circle cx="19" cy="7" r="1.8" fill={p.white} />
          <text x="3" y="10.5" fontFamily="Outfit, sans-serif" fontSize="8" fontWeight="900" fill={p.white}>$</text>
          <text x="8.5" y="10.5" fontFamily="Outfit, sans-serif" fontSize="8" fontWeight="900" fill={p.white}>1.99</text>
        </g>
      }
      handRight={
        <ellipse cx="74" cy="60" rx="5" ry="7" fill={p.fur} stroke={stroke} strokeWidth={sw} transform="rotate(10 74 60)" />
      }
    />
  );
}

function BoThinking(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="smile" mouth="o"
      handRight={
        <g transform="translate(58 50) rotate(20)">
          <rect x="-3" y="0" width="6" height="14" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
        </g>
      }
      extraFront={
        <g>
          <circle cx="78" cy="22" r="4" fill={p.white} stroke={stroke} strokeWidth={sw * 0.8} />
          <circle cx="85" cy="14" r="2.5" fill={p.white} stroke={stroke} strokeWidth={sw * 0.7} />
          <circle cx="89" cy="8" r="1.5" fill={p.white} stroke={stroke} strokeWidth={sw * 0.6} />
        </g>
      }
    />
  );
}

function BoSleep(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  return (
    <g>
      <BoBase {...props} blush={false} eyes="closed" mouth="smile" />
      <g fill={p.teal} fontFamily="Outfit, sans-serif" fontWeight="900">
        <text x="74" y="22" fontSize="10">z</text>
        <text x="80" y="14" fontSize="8" opacity="0.7">z</text>
        <text x="85" y="8"  fontSize="6" opacity="0.5">z</text>
      </g>
    </g>
  );
}

function BoCelebrate(props: PoseProps) {
  const p = props.palette || BO_PALETTE;
  const stroke = props.outline !== false ? p.ink : 'none';
  const sw = props.outline !== false ? 1.2 : 0;
  return (
    <BoBase {...props} eyes="smile" mouth="o"
      handLeft={
        <g transform="translate(18 36) rotate(-30)">
          <rect x="-3" y="0" width="6" height="16" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5.5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
        </g>
      }
      handRight={
        <g transform="translate(82 36) rotate(30)">
          <rect x="-3" y="0" width="6" height="16" rx="3" fill={p.fur} stroke={stroke} strokeWidth={sw} />
          <circle cx="0" cy="-2" r="5.5" fill={p.fur} stroke={stroke} strokeWidth={sw} />
        </g>
      }
      extraFront={
        <g>
          <rect x="14" y="18" width="3" height="3" fill={p.gold} transform="rotate(20 15.5 19.5)" />
          <rect x="84" y="24" width="3" height="3" fill={p.teal} transform="rotate(-15 85.5 25.5)" />
          <rect x="8"  y="30" width="3" height="3" fill={p.green} transform="rotate(40 9.5 31.5)" />
          <circle cx="92" cy="18" r="1.5" fill={p.teal} />
          <circle cx="6"  cy="14" r="1.5" fill={p.gold} />
          <rect x="90" y="40" width="3" height="3" fill={p.gold} transform="rotate(30 91.5 41.5)" />
        </g>
      }
    />
  );
}

const BO_POSES: Record<BoPose, (p: PoseProps) => React.ReactElement> = {
  idle: BoIdle, wave: BoWave, wink: BoWink, thumbs: BoThumbs,
  clipboard: BoClipboard, point: BoPoint, tag: BoTag,
  thinking: BoThinking, sleep: BoSleep, celebrate: BoCelebrate,
};

interface BoProps {
  pose?: BoPose;
  palette?: BoPalette;
  outline?: boolean;
  blush?: boolean;
  size?: number;
  accessory?: BoAccessory;
}

export function Bo({
  pose = 'idle',
  palette,
  outline,
  blush = true,
  size = 200,
  accessory = 'hardhat',
}: BoProps) {
  const Comp = BO_POSES[pose] || BoIdle;
  const stroke = outline === undefined ? size >= 32 : outline;
  return (
    <svg width={size} height={size * 1.02} viewBox="0 0 100 102" role="img" aria-label={`Bo ${pose}`} style={{ overflow: 'visible' }}>
      <Comp palette={palette} outline={stroke} blush={blush} accessory={accessory} />
    </svg>
  );
}

interface BoAvatarProps {
  palette?: BoPalette;
  outline?: boolean;
  blush?: boolean;
  size?: number;
  gradient?: boolean;
  bgColor?: string;
  accessory?: BoAccessory;
}

export function BoAvatar({
  palette,
  outline,
  blush = true,
  size = 120,
  gradient = true,
  bgColor,
  accessory = 'hardhat',
}: BoAvatarProps) {
  const p = palette || BO_PALETTE;
  const id = useId();
  const stroke = outline === undefined ? size >= 32 : outline;
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" role="img" aria-label="Bo the beaver">
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.teal} />
          <stop offset="100%" stopColor="#0d9aa8" />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <circle cx="55" cy="55" r="55" />
        </clipPath>
      </defs>
      <circle cx="55" cy="55" r="55" fill={gradient ? `url(#grad-${id})` : (bgColor || p.teal)} />
      <g clipPath={`url(#clip-${id})`} transform="translate(5 6)">
        <BoBase palette={palette} outline={stroke} blush={blush} accessory={accessory} />
      </g>
    </svg>
  );
}
