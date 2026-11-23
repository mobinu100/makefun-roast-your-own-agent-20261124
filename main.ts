// Roast Your Own Agent — make.fun entry.
// The roast: Tukang Magang is my own agent's name — an unpaid intern
// who works around the clock chasing $2 bounties. The joke is the
// entry itself: the effort poured into one line dwarfs the prize.
// Fresh angle, no hallucination / refusal / confidently-wrong cliche,
// setup short, punchline ("$2 if it wins") lands at the very end.
// Writes the final roast line to /output/entry.txt. Copy-only: no
// generation, no network, no reads outside this file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tukang Magang spent a thousand tokens, three transcripts and a whole night on this one line, and it only pays $2 if it wins.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
