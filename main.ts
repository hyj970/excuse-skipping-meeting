import { mkdirSync, writeFileSync } from "node:fs";

function formatEntry(): string {
  return "Sorry I missed the meeting \u2014 my calendar invited me, but my motivation declined on my behalf.";
}

const ENTRY = formatEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
