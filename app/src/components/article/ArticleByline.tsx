import type { ReactNode } from 'react';
import { colors, fonts } from '@/styles/tokens';
import type { Vertical } from '@/components/disclaimers/DisclaimerBlock';
import { WebhubLink } from '@/components/legal/WebhubLink';

/**
 * Vertical-specific article byline.
 *
 * Entity-named only — never an individual person. The credibility carrier
 * is the company under partnership agreement (KLC Group Canada Inc. for
 * life, Webhub4u Inc. editorial for everything else).
 *
 * Strategy doc rule: "No individual names anywhere in public copy."
 */

const BYLINES: Record<Vertical, ReactNode> = {
  // The /life/ byline is substantive — explicitly names the partnership and
  // the regulated capacity (review + quote + placement). Other verticals are
  // editorial-only credits.
  life: 'LLQP-licensed advisors at KLC Group Canada Inc. — content reviewed and quotes provided in partnership with TopRates.ca',
  pc: <>Editorial content from TopRates.ca · <WebhubLink /></>,
  mortgage: <>Editorial content from TopRates.ca · <WebhubLink /></>,
  cards: <>Editorial content with affiliate disclosure · TopRates.ca · <WebhubLink /></>,
};

export function ArticleByline({ vertical }: { vertical: Vertical }) {
  return (
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 11,
        letterSpacing: 1.2,
        color: colors.muted,
        textTransform: 'uppercase',
        fontWeight: 600,
        marginTop: 8,
      }}
    >
      {BYLINES[vertical]}
    </div>
  );
}

export default ArticleByline;
