# Cron Parser CLI

Command line application which parses a cron string and expands each
field to show the times at which it will run.

## Requirements

- Node.js 18+
- npm

## Install

```zsh
npm install
```

## Quick Start

Development:

```zsh
npm run dev "*/15 0 1,15 * 1-5 /usr/bin/find"
```

Build and run with Node:

```zsh
npm run build
node dist/index.js "*/15 0 1,15 * 1-5 /usr/bin/find"
```

## Test

```
npm run test

```
