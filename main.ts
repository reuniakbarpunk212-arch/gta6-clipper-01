// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a YouTube video: a GTA 6 gameplay moment cut into a
// vertical clip that pitches make.fun. This program's whole job is to hand
// the video's address to the grader: it reads VIDEO.json from the bot
// directory, sanity-checks that it parses and names a URL, and copies it
// byte-for-byte into the output directory, where the gate picks it up.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const linkFile = join(botDir, 'VIDEO.json');

// Fail loudly when the link file is missing or malformed: a silent pass
// would hand the gate nothing and score the entry zero anyway.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(linkFile, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json unreadable at ${linkFile}: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || !url.startsWith('http')) {
  console.error('VIDEO.json must hold a string "url" naming the video');
  process.exit(1);
}
// The gate only accepts a YouTube address (watch, shorts or youtu.be), so
// refuse anything else here instead of letting the entry score zero.
if (!/^https:\/\/(www\.)?(youtube\.com\/(watch|shorts)\/|youtu\.be\/)/.test(url)) {
  console.error(`VIDEO.json url is not a YouTube address: ${url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(linkFile, join(outDir, 'VIDEO.json'));
