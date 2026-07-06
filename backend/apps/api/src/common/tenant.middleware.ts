import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantSlug } from '@ratefamily/contracts';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      tenant: TenantSlug;
    }
  }
}

const VALID: Set<string> = new Set(['toprates', 'liferate', 'termrates', 'healthrate']);

/**
 * Resolves the tenant from the `x-tenant` header (set by the frontend
 * middleware / host mapping — PR #17 pattern). Defaults to toprates. In
 * production this is where RLS session context would be established per
 * request; the mock API just carries the slug through.
 */
@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const raw = (req.header('x-tenant') || 'toprates').toLowerCase();
    req.tenant = (VALID.has(raw) ? raw : 'toprates') as TenantSlug;
    next();
  }
}
