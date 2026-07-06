"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seededHash = seededHash;
exports.seededUnit = seededUnit;
exports.seededInt = seededInt;
exports.leadReference = leadReference;
__exportStar(require("./catalog"), exports);
__exportStar(require("./quotes"), exports);
__exportStar(require("./leads"), exports);
/**
 * The one randomness source across the whole platform. FNV-1a, seeded,
 * deterministic. Never Math.random — mock data must be identical across
 * processes, requests, and CI runs (V2 rule).
 */
function seededHash(input) {
    let h = 0x811c9dc5;
    for (let i = 0; i < input.length; i++) {
        h ^= input.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
}
function seededUnit(input) {
    return seededHash(input) / 0xffffffff;
}
function seededInt(input, min, max) {
    return min + (seededHash(input) % (max - min + 1));
}
function leadReference(parts) {
    return 'LR-' + String(seededHash(parts.join('|')) % 1_000_000).padStart(6, '0');
}
