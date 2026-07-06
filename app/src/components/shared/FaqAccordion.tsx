'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              width: '100%',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a365d',
            }}
          >
            <span>{item.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: 'transform 0.2s',
                transform: openIndex === index ? 'rotate(180deg)' : '',
                flexShrink: 0,
                marginLeft: '12px',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {openIndex === index && (
            <div style={{ padding: '0 20px 16px', color: '#4b5563', lineHeight: 1.6 }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
