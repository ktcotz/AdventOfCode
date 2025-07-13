import { createInputReader } from "../../shared/input";

const readInput = createInputReader(import.meta.url);

export function part1() {
  const input = readInput("input");
  const line = input[0];

  let santaX = 0;
  let santaY = 0;
  let miniSantaX = 0;
  let miniSantaY = 0;

  const visited = [{ x: santaX, y: santaY }];

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === ">") {
      i % 2 === 0 ? santaX++ : miniSantaX++;
    }
    if (char === "<") {
      i % 2 === 0 ? santaX-- : miniSantaX--;
    }
    if (char === "^") {
      i % 2 === 0 ? santaY++ : miniSantaY++;
    }
    if (char === "v") {
      i % 2 === 0 ? santaY-- : miniSantaY--;
    }

    const santaVisited = visited.some((v) => v.x === santaX && v.y === santaY);
    if (!santaVisited) visited.push({ x: santaX, y: santaY });

    const miniSantaVisited = visited.some(
      (v) => v.x === miniSantaX && v.y === miniSantaY
    );
    if (!miniSantaVisited) visited.push({ x: miniSantaX, y: miniSantaY });
  }

  console.log(visited.length);
}

export function part2() {
  const input = readInput("input");
}
