import fs from "fs";
import path from "path";

const year = process.argv[2];
const day = process.argv[3];

if (!year || !day) {
  console.error("Usage: npx tsx src/index.ts <year> <day>");
  process.exit(1);
}

const basePath = path.resolve("./src");
const yearPath = path.join(basePath, year);
const dayFolder = `day-${day}`;
const dayPath = path.join(yearPath, dayFolder);
const dayFile = path.join(dayPath, `${dayFolder}.ts`);

function checkExistsSync(pathToCheck: string): boolean {
  try {
    return fs.existsSync(pathToCheck);
  } catch {
    return false;
  }
}

async function run() {
  if (!checkExistsSync(yearPath)) {
    console.error(`❌ Year folder '${year}' does not exist.`);
    process.exit(1);
  }

  if (!checkExistsSync(dayPath)) {
    console.error(
      `❌ Day folder '${dayFolder}' does not exist in year ${year}.`
    );
    process.exit(1);
  }

  if (!checkExistsSync(dayFile)) {
    console.error(`❌ Day file '${dayFolder}.ts' does not exist.`);
    process.exit(1);
  }

  try {
    const modulePath = `./${year}/${dayFolder}/${dayFolder}.ts`;
    const dayModule = await import(modulePath);

    if (typeof dayModule.part1 === "function") {
      await dayModule.part1();
    } else {
      console.warn(`⚠️ No function part1 found in ${modulePath}`);
    }

    if (typeof dayModule.part2 === "function") {
      await dayModule.part2();
    } else {
      console.warn(`⚠️ No function part2 found in ${modulePath}`);
    }
  } catch (e) {
    console.error("Error loading module:", e);
  }
}

run();
