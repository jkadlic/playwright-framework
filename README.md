# playwright-framework

A Playwright + TypeScript test framework using the Page Object Model, targeting [automationexercise.com](https://automationexercise.com/).

## Requirements

- Node.js 22
- pnpm 10

## Setup

```sh
pnpm install
pnpm exec playwright install chromium
```

Copy the env template and fill in the account the tests log in as:

```sh
cp .env.example .env
```

The account must already exist on automationexercise.com.

## Running tests

```sh
pnpm test                    # everything
pnpm test tests/e2e          # one directory
pnpm test --grep @checkout   # by tag
pnpm test:ui                 # interactive UI mode
pnpm report                  # open the last HTML report
```

Tests run in Chromium, headed locally and headless when `CI` is set. The `authenticate` setup project runs first, logs in once, and saves the session to `.context/state.json`.

## Structure

```
fixtures/            Custom test fixtures (credentials)
src/
  constants.ts       Base URL and timeouts
  ui/pages/          Page objects
  ui/components/     Reusable components composed into pages (nav, gallery)
tests/
  setup/             Authentication setup project
  e2e/               End-to-end tests
  integration/       Integration tests
  ui/                UI tests
```

## Code quality

```sh
pnpm lint           # ESLint
pnpm format         # Prettier, write changes
pnpm format:check   # Prettier, check only
pnpm typecheck      # tsc --noEmit
```

## CI

`.github/workflows/playwright.yml` runs on pull requests to `main`, weekly against `main`, and on manual dispatch. It has two jobs:

- `lint`: ESLint, Prettier check and type-check.
- `test`: the Playwright suite, with the HTML report uploaded as an artifact. It reads `SERVICE_ACCOUNT_EMAIL` and `SERVICE_ACCOUNT_PASSWORD` from repository secrets.

## Contributing

Pull requests are welcome. Run `pnpm lint`, `pnpm format` and `pnpm typecheck` before opening one. Secrets are not available to pull requests from forks, so the `test` job will fail on them; run the suite locally instead.

## License

[ISC](LICENSE)
