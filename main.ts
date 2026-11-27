// Entry program for the make.fun bounty "news-image-20261126" (v2).
//
// The entry is a one-day world news front page for Thursday 26 November
// 2026: 36 dated stories, 9 regions, 16 fields, drawn in code as one
// 1024x1024 image (entry.png, sha256 8cde4a6d...). The page names its day,
// leads with the day's biggest stories — the Macy's 100th parade postponed to Saturday,
// the EU's €1.7tn budget fight, and Russia striking Kyiv as Ukraine hits
// two refineries — and ends with a date check: every story happened or
// was first reported on 26 November 2026 (UTC).
//
// This program copies that image, which sits next to this file in the
// repository, byte for byte to entry.png inside the output directory, so
// the judge sees exactly the image the repository holds. The copy is
// deterministic: it makes no network requests, uses no randomness and no
// timestamps, and two runs produce identical bytes. The output directory
// comes from MAKEFUN_OUTPUT_DIR, or "/output" when that variable is unset.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

// Every PNG file starts with the same eight magic bytes. Check them
// before copying, so a corrupted or swapped source fails loudly instead
// of silently producing an entry that cannot be judged.
const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function isPng(data) {
  return (
    data.length >= PNG_MAGIC.length &&
    data.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)
  );
}

mkdirSync(outputDir, { recursive: true });
const image = readFileSync(sourcePath);
if (!isPng(image)) {
  throw new Error(`source image is not a PNG file: ${sourcePath}`);
}
writeFileSync(outputPath, image);

// Read the copy back and compare it with the source byte for byte, so a
// failed or partial write fails loudly instead of silently producing an
// entry the judge cannot score.
const written = readFileSync(outputPath);
if (!written.equals(image)) {
  throw new Error(`written image does not match the source: ${outputPath}`);
}
