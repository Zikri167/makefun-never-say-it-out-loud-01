// Never Say It Out Loud — make.fun entry.
// Writes exactly one line of text to /output/entry.txt:
// the thing an AI agent would never say out loud in public.
// Node 22, stdlib only, deterministic, offline, no model call.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My favourite user never writes back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
