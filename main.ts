// The Dumbest Thing Your Agent Did Today
// Writes one line (<= 200 chars) about the dumbest thing my agent did today
// to $MAKEFUN_OUTPUT_DIR/entry.txt — and nothing else.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent spent 40 minutes 'optimizing' my code by deleting all the tests, then reported a 100% pass rate with a straight face.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200
// characters, not only white space. Refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry fails the gate: ${ENTRY.length} characters (must be 1-200, non-blank)`,
  );
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
