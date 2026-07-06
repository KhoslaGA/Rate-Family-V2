import type { ReactNode } from 'react';

const WEBHUB_URL = 'https://www.webhub4u.com/';

export function WebhubLink({ children }: { children?: ReactNode }) {
  return (
    <a
      href={WEBHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 decoration-current/40 hover:decoration-current"
    >
      {children ?? 'Webhub4u Inc.'}
    </a>
  );
}
