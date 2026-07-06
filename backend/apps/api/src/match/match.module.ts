import { Body, Controller, Post, Get, Query, Module, BadRequestException } from '@nestjs/common';
import {
  MatchRequest,
  MatchResponse,
  CompareResponse,
  Card,
  seededHash,
} from '@ratefamily/contracts';
import { mockCards } from '../mock/catalog.data';

@Controller('v1/match')
export class MatchController {
  @Post()
  match(@Body() body: MatchRequest): MatchResponse {
    const cards = mockCards();
    // deterministic scoring: category fit + fee preference + newcomer flag
    const scored = cards.map((c) => {
      let score = 0;
      if (body.newcomer && c.category === 'newcomer') score += 100;
      if (body.wantsNoFee && c.currentOffer.annualFee === 0) score += 40;
      if (body.spendCategories.includes('groceries') && /grocer/i.test(c.currentOffer.rewardsRateHeadline)) score += 30;
      if (body.spendCategories.includes('travel') && c.category === 'travel') score += 30;
      if (body.spendCategories.includes('dining') && /eat|din|drink/i.test(c.currentOffer.rewardsRateHeadline)) score += 25;
      // deterministic tiebreak, not random
      score += (seededHash(c.cardId) % 10);
      // higher annual spend tolerates annual fees
      if (body.annualSpend > 25000) score += c.currentOffer.annualFee > 0 ? 10 : 0;
      return { cardId: c.cardId, score };
    });
    scored.sort((a, b) => b.score - a.score);
    const ranked = scored.slice(0, 5).map((s) => s.cardId);
    return {
      mock: true,
      rankedCardIds: ranked,
      rationale: body.newcomer
        ? 'Prioritized no-credit-history cards, then your spend categories.'
        : 'Ranked by your spend categories and fee preference.',
    };
  }
}

@Controller('v1/compare')
export class CompareController {
  @Get()
  compare(@Query('ids') ids?: string): CompareResponse {
    if (!ids) throw new BadRequestException({ mock: true, error: 'ids query param required (comma-separated)' });
    const wanted = ids.split(',').map((s) => s.trim());
    const all = mockCards();
    const cards: Card[] = wanted.map((id) => all.find((c) => c.cardId === id)).filter(Boolean) as Card[];

    const rows = [
      { key: 'annualFee', label: 'Annual fee', values: cards.map((c) => c.currentOffer.annualFee) },
      { key: 'rewards', label: 'Rewards', values: cards.map((c) => c.currentOffer.rewardsRateHeadline) },
      { key: 'welcome', label: 'Welcome offer', values: cards.map((c) => c.currentOffer.welcomeOffer) },
      { key: 'purchaseApr', label: 'Purchase APR', values: cards.map((c) => c.currentOffer.purchaseAprPct) },
      { key: 'btApr', label: 'Balance transfer APR', values: cards.map((c) => c.currentOffer.balanceTransferAprPct) },
      { key: 'verified', label: 'Verified', values: cards.map((c) => c.currentOffer.verifiedAt.slice(0, 10)) },
    ];
    return { mock: true, cards, rows };
  }
}

@Module({ controllers: [MatchController, CompareController] })
export class MatchCompareModule {}
