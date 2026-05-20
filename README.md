# react-nextjs-boilerplate

Production-ready multilingual Next.js starter with TypeScript strict mode, Tailwind v4, next-intl (EN/FA + RTL), Zustand, TanStack Query, Firebase, and enterprise-ready app structure.

## Highlights

- Next.js 16 + App Router + TypeScript strict
- Tailwind CSS v4 with shadcn-compatible design tokens
- Class-based dark mode with `next-themes`
- `next-intl` localization (`en`, `fa`) with RTL support
- Feature-first structure (`auth`, `users`)
- Reusable UI/form/layout/data-table building blocks
- Axios API client with request/response interceptors
- TanStack Query for server-state caching
- Zustand stores for auth, modal, and UI state
- Firebase modular wrappers (auth, firestore, storage, messaging)
- Husky + lint-staged pre-commit integration

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI**: Tailwind v4, shadcn-style primitives, Radix UI
- **State**: Zustand, TanStack Query
- **Forms**: React Hook Form + Yup
- **I18n**: next-intl
- **Backend Integration**: Axios + Firebase SDK
- **Tooling**: ESLint, Prettier, Husky, lint-staged

## Project Structure

See:

- `docs/folder-structure.md`
- `docs/architecture.md`

## Getting Started

This project uses **Yarn** by default (`yarn.lock`). npm works too if you prefer it.

The `packageManager` field pins **Yarn 3**; enable Corepack once (ships with Node.js 16.10+) so the right Yarn version is used:

```bash
corepack enable
```

### 1) Install dependencies

```bash
yarn install
```

```bash
npm install
```

### 2) Configure environment variables

```bash
cp .env.example .env.local
```

Then update values in `.env.local`.

### 3) Start development server

```bash
yarn dev
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script             | Yarn                | npm                    |
| ------------------ | ------------------- | ---------------------- |
| Development server | `yarn dev`          | `npm run dev`          |
| Production build   | `yarn build`        | `npm run build`        |
| Production server  | `yarn start`        | `npm run start`        |
| ESLint             | `yarn lint`         | `npm run lint`         |
| ESLint (fix)       | `yarn lint:fix`     | `npm run lint:fix`     |
| Prettier format    | `yarn format`       | `npm run format`       |
| Format check       | `yarn format:check` | `npm run format:check` |
| TypeScript check   | `yarn typecheck`    | `npm run typecheck`    |

## Localization

- Locales are configured in `src/config/i18n.ts`.
- Routing is configured through `src/i18n/routing.ts`.
- Messages live in `messages/en.json` and `messages/fa.json`.
- All pages are locale-prefixed (`/en/...`, `/fa/...`).

## Authentication and Route Protection

- Middleware guards protected routes and redirects unauthenticated users.
- Auth state is managed in `src/stores/auth-store.ts`.
- Unauthorized responses from API trigger client-side auth reset.

## Firebase

For setup details, read:

- `docs/firebase-setup.md`

## Coding Guidelines

Read:

- `docs/coding-standards.md`

## Recommended Workflow

1. Create feature module under `src/features/<feature>`.
2. Add service API in `src/services`.
3. Reuse query keys from `src/constants/query-keys.ts`.
4. Add translations in both locale files.
5. Run `yarn lint` and `yarn build` (or `npm run lint` / `npm run build`) before opening a PR.

## License

Private/internal use unless specified otherwise by your organization.
