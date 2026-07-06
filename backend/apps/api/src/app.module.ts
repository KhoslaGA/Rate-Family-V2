import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TenantMiddleware } from './common/tenant.middleware';
import { CatalogModule } from './catalog/catalog.module';
import { QuotesModule } from './quotes/quotes.module';
import { LeadsModule } from './leads/leads.module';
import { RedirectModule } from './redirect/redirect.module';
import { MatchCompareModule } from './match/match.module';

@Module({
  imports: [CatalogModule, QuotesModule, LeadsModule, RedirectModule, MatchCompareModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // tenant resolution on every route (catalog, quotes, leads, redirect)
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
