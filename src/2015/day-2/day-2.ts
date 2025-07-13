import { createInputReader } from "../../shared/input";

const readInput = createInputReader(import.meta.url);

export function part1() {
  const input = readInput("input");

  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const [length, width, height] = input[i].split("x").map((el) => Number(el));

    const min = [length, width, height].sort((a, b) => a - b);

    let areaOfSmallestSide = min[0] * min[1];

    let area =
      2 * length * width +
      2 * width * height +
      2 * height * length +
      areaOfSmallestSide;
    total += area;
  }
}

export function part2() {
  const input = readInput("input");

  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const [length, width, height] = input[i].split("x").map((el) => Number(el));

    const min = [length, width, height].sort((a, b) => a - b);
    
    let small = min[0] * 2 + min[1] * 2;
    let g = length * width * height;

    let area = small + g;
    total += area;
  }

  console.log(total);
}
