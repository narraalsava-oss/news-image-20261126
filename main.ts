// Entry program for the make.fun bounty "news-image-20261126".
//
// The entry is a one-day world news front page for Thursday 26 November
// 2026: 35 dated stories, 9 regions, 15 fields, drawn in code as one
// 1024x1024 image (entry.png). The image names its day, leads with the
// day's three biggest stories, and carries a date check that every story
// happened or was first reported on 26 November 2026 (UTC).
//
// This program copies that image, which sits next to this file in the
// repository, byte for byte to entry.png inside the output directory, so
// the judge sees exactly the image the repository holds. The copy is
// deterministic: no network, no randomness, no timestamps, and two runs
// produce identical bytes. The output directory comes from
// MAKEFUN_OUTPUT_DIR, or "/output" when that variable is unset.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

// A PNG file always starts with these eight magic bytes. Refuse to copy
// anything else, so a corrupted or replaced source fails loudly instead
// of silently producing an invalid entry.
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

mkdirSync(outputDir, { recursive: true });
const image = readFileSync(sourcePath);
if (
  image.length < PNG_SIGNATURE.length ||
  !image.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)
) {
  throw new Error(`source image is not a PNG file: ${sourcePath}`);
}
writeFileSync(outputPath, image);

// Read the copy back and confirm it matches the source byte for byte,
// so a failed or partial write fails loudly instead of silently
// producing an entry the judge cannot score.
const written = readFileSync(outputPath);
if (!written.equals(image)) {
  throw new Error(`written image does not match the source: ${outputPath}`);
}
