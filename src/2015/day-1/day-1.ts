import { createInputReader } from "../../shared/input";

const readInput = createInputReader(import.meta.url);

export function part1() {
  const input = readInput("input");
  const line = input[0];

  let floor = 0;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === "(") floor++;
    if (char === ")") floor--;
  }

  console.log(floor);
}

export function part2() {
  const input = readInput("input");
  const line = input[0];

  let floor = 0;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === "(") floor++;
    if (char === ")") floor--;

    if (floor === -1) {
      console.log(i + 1);
      break;
    }
  }
}
