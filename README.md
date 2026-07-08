# mandatsrechner

A small program to calculate the number of mandates based on the vote share per party for upcoming parliament elections in Austria, Germany, and select other countries.

## Setup

### Prerequisites

- **Node.js** (v22 or higher recommended)
- **pnpm**

### Local Development

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

### Building

To create a production version of the app:

```bash
pnpm run build
```

This command will also generate the preview images for each election.

You can preview the production build with `pnpm run preview`.

## Author

- **Yannick Adler** - [GitHub Profile](https://github.com/yadler97)