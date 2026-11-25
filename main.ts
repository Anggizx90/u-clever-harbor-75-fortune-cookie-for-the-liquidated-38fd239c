// Fortune Cookie for the Liquidated Trader — make.fun competition
// u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
// Writes exactly one fortune cookie line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Deterministic: no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line, 13 words, 78 characters (gate: 1-160 chars, at most 20 words).
const ENTRY =
  "Good fortune is coming: it left a voicemail while you were getting liquidated.";

// Gate: UTF-8 text, 1 to 160 characters, not only whitespace, exactly one line.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 160 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.split(/\s+/).length > 20
) {
  throw new Error("ENTRY must be one line of 1-160 characters and at most 20 words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
