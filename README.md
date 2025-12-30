# Cron Parser CLI

Command line application which parses a cron string and expands each
field to show the times at which it will run.

## Requirements

- Node.js 18+ (recommended)
- npm

## Install

```zsh
npm install
```

## Quick Start

Development (no build):

```zsh
npm run dev -- "0 0 1 * * /bin/run"
```

Build and run with Node:

```zsh
npm run build
node dist/index.js "0 0 1 * * /bin/run"
```

## Usage

The CLI expects a single cron expression argument:

```zsh
cron-parser "<minute> <hour> <day-of-month> <month> <day-of-week> <command>"
```

- Fields support `*`, ranges (`a-b`), lists (`a,b,c`), and steps (`*/n` or `a-b/n`).
- Day-of-week range is `0-6`; month range is `1-12`.

### Example

Input:

```zsh
cron-parser "0 0 1 * * /bin/run"
```

Output:

```
minute        0
hour          0
dom           1
month         1 2 3 4 5 6 7 8 9 10 11 12
dow           0 1 2 3 4 5 6
command       /bin/run
```

## Project Scripts

```zsh
# Build TypeScript to dist/
npm run build

# Run CLI in dev (ts-node)
npm run dev -- "<cron expression>"

# Run tests
npm test

# Lint and format
npm run lint
npm run format
```

## Structure

```
src/
  core/
    CronExpression.ts
    CronParser.ts
    OutputFormatter.ts
  fields/
    MinuteField.ts
    HourField.ts
    DayOfMonthField.ts
    MonthField.ts
    DayOfWeekField.ts
    CommandField.ts
    index.ts
  utils/
    FieldExpander.ts
```

- `CronParser` tokenizes the expression and builds field objects.
- `CronExpression.expand()` returns name/value pairs for each field.
- `OutputFormatter` aligns and prints the expanded values.
- `FieldExpander` handles `*`, ranges, lists, and step logic.

## Notes

- Directory import `../fields` is resolved via `src/fields/index.ts` (barrel).
- The CLI prints space-separated expansions for array fields and the raw command string as-is.
