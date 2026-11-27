// news-image-20261126, v2 entry program.
//
// The entry is a front page of world news for Thursday 26 November 2026:
// 36 dated stories from 9 regions and 16 fields, drawn in code into a
// single 1024x1024 picture (entry.png, sha256 8cde4a6d...). The page puts the day in a big
// masthead date, leads with the Macy's 100th parade postponement, the EU
// budget fight and the Kyiv strikes, and closes with a date check that
// every story happened or was first reported on 26 November 2026 (UTC).
//
// This program's only job is to hand the judge exactly the picture the
// repository holds: it copies entry.png, byte for byte, into the output
// directory. Nothing here touches the network, rolls dice or stamps the
// time, so two runs always produce identical bytes. The output directory
// is MAKEFUN_OUTPUT_DIR, falling back to "/output".
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_HEADER = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, "entry.png");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const target = join(outDir, "entry.png");

  const bytes = readFileSync(source);
  if (
    bytes.length < PNG_HEADER.length ||
    !bytes.subarray(0, PNG_HEADER.length).equals(PNG_HEADER)
  ) {
    throw new Error("entry.png is not a PNG file");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, bytes);

  const back = readFileSync(target);
  if (!back.equals(bytes)) {
    throw new Error("entry.png copy does not match the source");
  }
}

main();
