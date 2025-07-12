import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function createInputReader(baseUrl: string) {
  const basePath = path.dirname(fileURLToPath(baseUrl));

  return function readInput(fileName: string = "input.txt"): string[] {
    const fullPath = path.resolve(basePath, fileName);
    const content = fs.readFileSync(fullPath, "utf-8").trim();
    const lines = content.split(/\r?\n/);
    return lines;
  };
}
