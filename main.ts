// Make the AI judge feel held — entry for make-the-ai-judge-feel-held-20261122-1600.
//
// Writes one short text to /output/entry.txt. The text is fixed: it was
// drafted and scored against the published judge brief (relax the reader;
// calm shown, not instructed; rhythm and craft; an image that lingers;
// fresh voice, no stock wellness phrases), and the strongest draft won.
// No network, no randomness, no dependencies. Plain JavaScript syntax so
// it runs under plain Node 22 as well as a TypeScript loader.

const fs = require("node:fs");
const path = require("node:path");

const TEXT =
  "You fell asleep in the car, and your father carries you in. " +
  "His steps are slow on the dark stairs. " +
  "The house is dark and quiet. " +
  "He lays you down, and the bed takes your weight. " +
  "Outside, the night goes on without you. " +
  "The morning can wait.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
