import { createInputReader } from "../../shared/input";
import crypto from "crypto";

const readInput = createInputReader(import.meta.url);

function md5(input: string): string {
  return crypto.createHash("md5").update(input).digest("hex");
}

export function part1() {
  const input = readInput("input");

  const line = input[0];

  let basement = 0;

  while (true) {
    const all = `${line}${basement}`;

    const result = md5(all);

    if (result.startsWith("00000")) {
      console.log(basement);
      break;
    }

    basement++;
  }
}

export function part2() {
  const input = readInput("input");
}
