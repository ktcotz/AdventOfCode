# Advent of Code TypeScript Starter

This repository provides a clean, scalable TypeScript setup for solving [Advent of Code](https://adventofcode.com/) puzzles, organized by year and day.

---

## Features

- Modular structure: separate folders per year and day  
- Each day has its own TypeScript file exporting `part1` and `part2` functions  
- Input files stored alongside solutions for easy management  
- Simple CLI interface to run solutions by specifying year and day  
- Automatic input file loading relative to the solution file  
- Validation of year/day existence with clear error messages  
- Support for running both parts sequentially without extra arguments  
- Watch mode available (if using tools like `nodemon` or similar)  
- Uses native ES Modules and modern TypeScript features  

---

## Repository structure

```bash aoc-root/
├── src/
│   ├── index.ts              # CLI entry point
│   ├── shared/
│   │   └── input.ts          # reusable input reading utility
│   ├── 2015/
│   │   └── day-1/
│   │       └── day-1.ts      # solution for 2015 day 1
│   │       └── input         # input for 2015 day 
│   └── 2023/
│       └── day-5/
│           └── day-5.ts      # solution for 2023 day 5
├── inputs/
│   ├── 2015/
│   │   └── day-1.txt         # input file for 2015 day 1
│   └── 2023/
│       └── day-5.txt         # input file for 2023 day 5
├── package.json
├── tsconfig.json
└── README.md

```
## Usage

### Prerequisites

- Node.js (version 18+ recommended)  
- `npm` or `yarn`

### Installation

```bash
npm install
```
### Run script 

```bash
npm run (start|watch) src/index.ts <year> <day>
```
