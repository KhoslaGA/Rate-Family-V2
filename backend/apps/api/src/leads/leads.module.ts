import { Body, Controller, Post, Module, BadRequestException } from '@nestjs/common';
import { LeadRequest, LeadResponse, leadReference } from '@ratefamily/contracts';

/**
 * Leads intake. Mirrors the frontend /api/mock/quote/lead validation and
 * the real /api/life-referral contract. Stores nothing in the mock (no
 * Sanity/Resend); returns a deterministic reference so the handoff UI has a
 * number to show.
 *
 * NOTE: there is deliberately NO bind endpoint anywhere in this codebase.
 * Binding is a regulated act; pre-RIBO the platform stops at the lead. This
 * is asserted by the test suite on purpose.
 */

const ALLOWED_CONTACT_TIMES = new Set(['weekday_mornings', 'weekday_afternoons', 'weekday_evenings', 'weekends']);

function validEmail(e: string): boolean {
  return typeof e === 'string' && e.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

@Controller('v1/leads')
export class LeadsController {
  @Post()
  create(@Body() body: LeadRequest): LeadResponse {
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const province = String(body.province ?? '').trim();

    if (!name || name.length < 2) throw new BadRequestException({ mock: true, ok: false, error: 'Name required' });
    if (!validEmail(email)) throw new BadRequestException({ mock: true, ok: false, error: 'Valid email required' });
    if (!province) throw new BadRequestException({ mock: true, ok: false, error: 'Province required' });
    if (body.consented !== true) throw new BadRequestException({ mock: true, ok: false, error: 'Consent is required to submit' });
    if (!body.consentText || body.consentText.length < 20) {
      // the wording shown IS the wording stored — refuse a lead with no evidence
      throw new BadRequestException({ mock: true, ok: false, error: 'Consent text (CASL evidence) required' });
    }
    if (body.preferredContact === 'phone' && !body.phone) {
      throw new BadRequestException({ mock: true, ok: false, error: 'Phone number is required if you prefer phone contact' });
    }
    if (body.contactTime && !ALLOWED_CONTACT_TIMES.has(body.contactTime)) {
      throw new BadRequestException({ mock: true, ok: false, error: 'Invalid contact time' });
    }

    const reference = leadReference([name, email, body.vertical, JSON.stringify(body.quoteContext ?? {})]);
    return { mock: true, ok: true, reference };
  }
}

@Module({ controllers: [LeadsController] })
export class LeadsModule {}
