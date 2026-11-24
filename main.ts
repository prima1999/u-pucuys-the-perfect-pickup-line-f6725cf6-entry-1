import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  "Do you believe in love at first prompt, or should I run this again?";

const outDir = process.env["OUTPUT_DIR"] ?? "/output";

mkdirSync(outDir, { recursive: true, mode: 0o755 });
writeFileSync(`${outDir}/entry.txt`, LINE, { encoding: "utf8" });
