import { createInputReader } from "../../shared/input";

const readInput = createInputReader(import.meta.url);

export function part1() {
  const input = readInput("input");

  let niceStrings = 0;

  for (const line of input) {
    let hasRepeatingPair = false;
    let hasRepeatWithOneBetween = false;

    for (let i = 0; i < line.length - 1; i++) {
      const pair = line.slice(i, i + 2);
      const rest = line.slice(i + 2);

      if (rest.includes(pair)) {
        hasRepeatingPair = true;
        break;
      }
    }

    for (let i = 0; i < line.length - 2; i++) {
      if (line[i] === line[i + 2]) {
        hasRepeatWithOneBetween = true;
        break;
      }
    }

    if (hasRepeatingPair && hasRepeatWithOneBetween) {
      niceStrings++;
    }
  }

  console.log(niceStrings);
}

export function part2() {
  const input = readInput("input");
}
