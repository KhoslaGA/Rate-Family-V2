import { Body, Controller, Post, Module } from '@nestjs/common';
import {
  CarrierAdapter,
  LifeQuoteRequest,
  AutoQuoteRequest,
  HealthQuoteRequest,
} from '@ratefamily/contracts';
import { MockCarrierAdapter } from '../mock/mock-carrier.adapter';

const CARRIER_ADAPTER = 'CARRIER_ADAPTER';

@Controller('v1/quotes')
export class QuotesController {
  constructor(
    // depend on the interface, never the concrete adapter — swap is a
    // provider binding, not a controller change
    private readonly adapter: MockCarrierAdapter,
  ) {}

  @Post('life')
  life(@Body() body: LifeQuoteRequest) {
    return this.adapter.quoteLife(body);
  }

  @Post('auto')
  auto(@Body() body: AutoQuoteRequest) {
    return this.adapter.quoteAuto(body);
  }

  @Post('health')
  health(@Body() body: HealthQuoteRequest) {
    return this.adapter.quoteHealth(body);
  }
}

@Module({
  controllers: [QuotesController],
  providers: [
    MockCarrierAdapter,
    // the seam: today MockCarrierAdapter fulfils CARRIER_ADAPTER; post-gates
    // this token points at CompuLifeAdapter / ApolloAdapter with no
    // controller change
    { provide: CARRIER_ADAPTER, useExisting: MockCarrierAdapter },
  ],
})
export class QuotesModule {}
