import { Controller, Get, Param, Req, Res, Module } from '@nestjs/common';
import { Request, Response } from 'express';
import { seededHash } from '@ratefamily/contracts';
import { mockCards } from '../mock/catalog.data';

/**
 * /go/:cardId — the attribution-logging redirector. Components never emit
 * raw affiliate URLs; they emit card IDs and let this endpoint resolve the
 * monetized link. The subid IS the click id (the postback reconciliation
 * key). Cards with no affiliate link take the unmonetized fallback and log
 * monetizable=false.
 *
 * Mock affiliate URLs live here only — never in the catalog payload, so a
 * scraped card list can't leak monetization.
 */

const AFFILIATE_BASE: Record<string, string> = {
  fintel: 'https://track.fintelconnect.example/click',
  cj: 'https://www.anrdoezrs.example/click',
  direct: '', // direct issuer — resolved per card below; empty = fallback
  none: '',
};

function issuerApplyUrl(cardId: string): string {
  return `https://apply.example/card/${cardId}`;
}

@Controller('go')
export class RedirectController {
  @Get(':cardId')
  go(@Param('cardId') cardId: string, @Req() req: Request, @Res() res: Response) {
    const card = mockCards().find((c) => c.cardId === cardId);
    // click id doubles as subid — deterministic per card+tenant for the mock
    const clickId = 'clk_' + seededHash(`${cardId}:${req.tenant}:${Date.now() >> 16}`).toString(16);

    if (!card) {
      res.redirect(302, '/credit-cards');
      return;
    }

    const base = AFFILIATE_BASE[card.network];
    const monetizable = Boolean(base);
    const targetUrl = monetizable
      ? `${base}?card=${cardId}&subid=${clickId}`
      : issuerApplyUrl(cardId); // fallback: still send the user, just unmonetized

    // in production: INSERT INTO click (...) — here we just set a header so
    // tests can assert the attribution decision without a DB
    res.setHeader('X-Mock-Click-Id', clickId);
    res.setHeader('X-Mock-Monetizable', String(monetizable));
    res.redirect(302, targetUrl);
  }
}

@Module({ controllers: [RedirectController] })
export class RedirectModule {}
