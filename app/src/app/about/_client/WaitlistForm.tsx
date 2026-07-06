'use client';

import { useState } from 'react';

const TEAL = '#0A7E8C';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (email.includes('@')) setSubmitted(true);
  };

  if (submitted) {
    return <span style={{ fontSize: 14, color: TEAL, fontWeight: 600 }}>✓ You&rsquo;re on the list!</span>;
  }

  return (
    <div style={{ display: 'flex', gap: 8, maxWidth: 380, margin: '0 auto' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        style={{
          flex: 1, padding: '11px 16px', borderRadius: 8,
          border: '1px solid #d0d5db', fontSize: 14,
          fontFamily: "var(--font-serif)", outline: 'none',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          background: TEAL, color: '#fff', border: 'none', borderRadius: 8,
          padding: '11px 22px', fontSize: 14, fontWeight: 700,
          fontFamily: "var(--font-serif)", cursor: 'pointer',
        }}
      >
        Join Waitlist
      </button>
    </div>
  );
}
