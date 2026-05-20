# Architecture Overview

This project is an enterprise-ready frontend boilerplate built on Next.js App Router, Next 16, TypeScript strict mode, Tailwind v4, and next-intl.

## Layers

- **App Layer**: Route composition, locale-aware layouts, loading/error boundaries, and page entry points in `src/app`.
- **Feature Layer**: Vertical modules under `src/features` (`auth`, `users`) containing API, query hooks, UI, and schemas.
- **Shared Components**: Reusable UI primitives and common blocks under `src/components`.
- **State Layer**: Client state via Zustand stores in `src/stores`.
- **Data Layer**: API client/interceptors in `src/lib/api` plus React Query for caching and server-state coordination.
- **Service Layer**: HTTP service contracts under `src/services`.
- **Platform Integrations**: Firebase modular SDK wrappers under `src/lib/firebase`.

## Request Flow

1. UI submits intent (for example, login form).
2. Feature hook triggers TanStack Query mutation.
3. Mutation calls feature API module.
4. Feature API delegates to a service.
5. Service calls Axios client (`apiClient`) with global interceptors.
6. Interceptors inject auth token and normalize API errors.
7. React Query updates cache and UI reflects result.

## Internationalization

- Supported locales: `en`, `fa`.
- Routing uses `next-intl` locale prefix strategy (`/en/...`, `/fa/...`).
- Messages are loaded from `messages/en.json` and `messages/fa.json`.
- RTL direction is automatically applied for Persian.

## Authentication Model

- Auth token is persisted in Zustand (`auth-store`) and browser storage.
- Middleware protects dashboard/settings routes and redirects guests to localized login.
- Unauthorized API responses emit a browser event and clear local auth state.

## UI System

- Primitive components follow shadcn patterns under `src/components/ui`.
- Domain and shell UI compose primitives (`common`, `forms`, `layouts`, `data-table`, `typography`).
- Theme is managed by `next-themes` with class-based dark mode and tokenized CSS variables.

## Extending the Boilerplate

- Add a new feature as `src/features/<feature-name>/`.
- Add service contracts in `src/services`.
- Reuse query keys from `src/constants/query-keys.ts`.
- Keep translations synced in both locale message files.
