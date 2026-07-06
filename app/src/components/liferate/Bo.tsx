/**
 * Bo the beaver — Rate Family mascot, ported from assets/bo.js to React.
 * Hard hat tints with the active --accent (rosewood on LifeRate). `pose`
 * raises the right paw when 'wave'. Each instance needs a unique gradient id.
 */
let uid = 0

export default function Bo({ pose = 'idle', className }: { pose?: 'idle' | 'wave'; className?: string }) {
  const id = `bo${uid++}`
  const wave = pose === 'wave'
  return (
    <svg className={className} viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bo the beaver">
      <defs>
        <linearGradient id={`${id}-fur`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A56C40" /><stop offset="1" stopColor="#8A5631" />
        </linearGradient>
        <linearGradient id={`${id}-muz`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7C49A" /><stop offset="1" stopColor="#D6AD7C" />
        </linearGradient>
        <linearGradient id={`${id}-hat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="color-mix(in srgb, var(--accent) 78%, white)" /><stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <g transform="rotate(18 205 250)">
        <ellipse cx="205" cy="250" rx="34" ry="46" fill="#6E4626" />
        <ellipse cx="205" cy="250" rx="24" ry="36" fill="#835634" />
        <path d="M186 232 H224 M184 244 H226 M184 256 H226 M188 268 H222" stroke="#6E4626" strokeWidth="3" strokeLinecap="round" />
        <path d="M205 214 V286 M193 220 V280 M217 220 V280" stroke="#6E4626" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />
      </g>
      <path d="M70 300 C70 232 96 196 130 196 C164 196 190 232 190 300 Z" fill={`url(#${id}-fur)`} />
      <path d="M104 300 C104 252 116 232 130 232 C144 232 156 252 156 300 Z" fill="#E7C49A" opacity="0.9" />
      <ellipse cx="86" cy="268" rx="20" ry="16" fill="#8A5631" />
      <path d="M78 264 v10 M86 263 v12 M94 264 v10" stroke="#6E4626" strokeWidth="2.4" strokeLinecap="round" />
      <g transform={wave ? 'rotate(-26 176 244)' : undefined}>
        <ellipse cx="176" cy={wave ? '232' : '268'} rx="20" ry="16" fill="#8A5631" />
        <path d={`M168 ${wave ? '228' : '264'} v10 M176 ${wave ? '227' : '263'} v12 M184 ${wave ? '228' : '264'} v10`} stroke="#6E4626" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <circle cx="82" cy="92" r="20" fill="#7E4E2B" /><circle cx="178" cy="92" r="20" fill="#7E4E2B" />
      <circle cx="82" cy="92" r="10" fill="#9A6238" /><circle cx="178" cy="92" r="10" fill="#9A6238" />
      <path d="M130 38 C176 38 206 74 206 122 C206 172 174 204 130 204 C86 204 54 172 54 122 C54 74 84 38 130 38 Z" fill={`url(#${id}-fur)`} />
      <ellipse cx="130" cy="150" rx="52" ry="44" fill={`url(#${id}-muz)`} />
      <circle cx="84" cy="150" r="13" fill="#E79A6E" opacity="0.55" /><circle cx="176" cy="150" r="13" fill="#E79A6E" opacity="0.55" />
      <ellipse cx="103" cy="118" rx="15" ry="17" fill="#FFFFFF" /><ellipse cx="157" cy="118" rx="15" ry="17" fill="#FFFFFF" />
      <circle cx="106" cy="121" r="7.5" fill="#2A2018" /><circle cx="160" cy="121" r="7.5" fill="#2A2018" />
      <circle cx="109" cy="118" r="2.6" fill="#FFFFFF" /><circle cx="163" cy="118" r="2.6" fill="#FFFFFF" />
      <path d="M90 100 q13 -8 26 -2" stroke="#6E4626" strokeWidth="4" strokeLinecap="round" />
      <path d="M144 98 q13 -6 26 2" stroke="#6E4626" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 138 c-10 0 -16 6 -16 13 c0 7 8 12 16 12 c8 0 16 -5 16 -12 c0 -7 -6 -13 -16 -13 Z" fill="#3A2A20" />
      <ellipse cx="124" cy="150" rx="3" ry="2" fill="#6B5443" opacity="0.7" />
      <rect x="121" y="166" width="8.6" height="20" rx="3" fill="#FFFFFF" stroke="#E2D6C2" strokeWidth="1" />
      <rect x="130.4" y="166" width="8.6" height="20" rx="3" fill="#FFFFFF" stroke="#E2D6C2" strokeWidth="1" />
      <path d="M130 168 v16" stroke="#E2D6C2" strokeWidth="1.2" />
      <path d="M118 165 q12 -5 24 0" stroke="#3A2A20" strokeWidth="3" strokeLinecap="round" fill="none" />
      <g>
        <path d="M58 96 C58 60 90 36 130 36 C170 36 202 60 202 96 Z" fill={`url(#${id}-hat)`} />
        <rect x="48" y="92" width="164" height="14" rx="7" fill="var(--accent)" />
        <rect x="48" y="92" width="164" height="6" rx="3" fill="color-mix(in srgb, var(--accent) 72%, black)" />
        <path d="M130 40 C150 40 166 54 172 78" stroke="color-mix(in srgb, white 55%, transparent)" strokeWidth="6" strokeLinecap="round" />
        <rect x="120" y="52" width="20" height="40" rx="6" fill="color-mix(in srgb, var(--accent) 72%, black)" />
      </g>
    </svg>
  )
}
