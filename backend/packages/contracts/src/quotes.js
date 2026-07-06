"use strict";
/**
 * Quote contracts. The life shapes match QUOTER-CONTRACT.md and the
 * frontend engine exactly, so the LifeRate quoter can point at the real
 * /v1/quotes/life route with a URL change and nothing else. Auto/home/
 * health extend the same skeleton.
 *
 * Everything here is served by the MockCarrierAdapter today. The adapter
 * interface (never these types) is what swaps to CompuLife / APOLLO / APRIL
 * after the licensing gates — the frontend never sees the difference.
 */
Object.defineProperty(exports, "__esModule", { value: true });
