# TypeScript Practice

A small TypeScript practice project with two typed-data exercises: **Notes App** and **People Directory**.

## Requirements

- Node.js and npm

## Setup

Install the project dependencies:

```bash
npm install
```

TypeScript is configured with strict type checking in `tsconfig.json`.

## Run the exercises

Run the Notes exercise:

```bash
npm run notes
```

Run the People Directory exercise:

```bash
npm run people
```

## Check types

Check the project without generating output files:

```bash
npm run typecheck
```

This runs `tsc --noEmit`. No output means the type check passed.

## Exercises

- `notes.ts` defines note tags and note data, counts pinned notes, and safely handles a note that may not be found.
- `people.ts` defines roles and people, filters by role, and safely handles a person that may not be found.
