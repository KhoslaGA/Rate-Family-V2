import { Controller, Get, Param, Query, Req, Module, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { Card, CardListResponse, CardCategory, AffiliateNetwork } from '@ratefamily/contracts';
import { mockCards } from '../mock/catalog.data';

@Controller('v1/cards')
export class CatalogController {
  private all(): Card[] {
    return mockCards();
  }

  @Get()
  list(
    @Req() req: Request,
    @Query('category') category?: CardCategory,
    @Query('issuer') issuer?: string,
    @Query('network') network?: AffiliateNetwork,
    @Query('limit') limit?: string,
  ): CardListResponse {
    let cards = this.all();
    if (category) cards = cards.filter((c) => c.category === category);
    if (issuer) cards = cards.filter((c) => c.issuerSlug === issuer);
    if (network) cards = cards.filter((c) => c.network === network);
    if (limit) cards = cards.slice(0, Math.max(1, parseInt(limit, 10) || cards.length));
    return { mock: true, tenant: req.tenant, count: cards.length, cards };
  }

  // Reserved sub-paths that are their own controllers (compare, match).
  // Without this guard the greedy :cardId param would shadow them since
  // they're also under /v1/cards. Explicit 404 keeps the contract clean.
  @Get(':cardId')
  one(@Param('cardId') cardId: string): Card {
    const RESERVED = new Set(['compare', 'match']);
    if (RESERVED.has(cardId)) throw new NotFoundException({ mock: true, error: 'RESERVED_PATH', cardId });
    const card = this.all().find((c) => c.cardId === cardId);
    if (!card) throw new NotFoundException({ mock: true, error: 'CARD_NOT_FOUND', cardId });
    return card;
  }
}

@Module({ controllers: [CatalogController] })
export class CatalogModule {}
