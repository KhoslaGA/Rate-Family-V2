import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from '@react-email/components';
import type { KlcHandoffPayload } from '@/lib/email/klcHandoff';
import { formatPhone } from '@/lib/phone';

/**
 * Referral notification template sent to KLC Group Canada Inc. when a new
 * /life-insurance lead is captured. Plain HTML rendered via React Email so
 * it works in any client (Gmail, Outlook, mobile mail, etc.) without
 * dependence on CSS.
 *
 * The footer paragraph is the partnership disclosure: it tells KLC's intake
 * person what we collected, what we did NOT collect, and what they should
 * collect directly under their FSRA-regulated framework. This is also the
 * paper-trail evidence that the data-flow separation is honored.
 */
export function KlcReferralEmail(p: KlcHandoffPayload) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f6efe0' }}>
        <Container
          style={{
            maxWidth: '560px',
            margin: '40px auto',
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <Heading style={{ color: '#1B2A4A', marginBottom: '16px' }}>
            New referral from TopRates.ca
          </Heading>

          <Text>
            A new prospect has consented to be contacted about life insurance
            via TopRates.ca and is being forwarded to KLC Group Canada Inc.
            under the partnership agreement.
          </Text>

          <Hr style={{ margin: '24px 0', borderColor: '#e5e5e5' }} />

          <Heading as="h2" style={{ fontSize: '18px', color: '#0A7E8C' }}>
            Lead details
          </Heading>
          <Text>
            <strong>Name:</strong> {p.name}
          </Text>
          <Text>
            <strong>Email:</strong> {p.email}
          </Text>
          {p.phone ? (
            <Text>
              <strong>Phone:</strong> {formatPhone(p.phone)}
            </Text>
          ) : null}
          <Text>
            <strong>Preferred contact:</strong> {p.preferredContact}
          </Text>
          <Text>
            <strong>Province:</strong> {p.province}
          </Text>
          <Text>
            <strong>Age range:</strong> {p.ageRange}
          </Text>
          <Text>
            <strong>Coverage interest:</strong> {p.coverageInterest}
          </Text>
          <Text>
            <strong>Best times to contact:</strong>{' '}
            {p.contactTimes.length > 0
              ? p.contactTimes.join(', ')
              : 'not specified'}
          </Text>
          {p.message ? (
            <Text>
              <strong>Message:</strong> {p.message}
            </Text>
          ) : null}

          <Hr style={{ margin: '24px 0', borderColor: '#e5e5e5' }} />

          <Text style={{ fontSize: '13px', color: '#6b6b6b' }}>
            Internal reference: {p.referralId}
          </Text>
          <Text style={{ fontSize: '13px', color: '#6b6b6b' }}>
            Please reply to this email or contact the prospect directly to
            confirm receipt and acknowledge the handoff.
          </Text>

          <Hr style={{ margin: '24px 0', borderColor: '#e5e5e5' }} />

          <Text style={{ fontSize: '12px', color: '#9b9b9b' }}>
            Forwarded by Webhub4u Inc. (operator of TopRates.ca) under the
            referral partnership with KLC Group Canada Inc. The prospect has
            provided CASL-compliant consent to be contacted by both Webhub4u
            Inc. and KLC Group Canada Inc. about the products listed above.
            Detailed personal, medical, and financial information was NOT
            collected by Webhub4u Inc. and should be collected directly by
            KLC Group Canada Inc. under your FSRA-regulated framework.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
