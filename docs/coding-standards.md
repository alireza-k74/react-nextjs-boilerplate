# Coding Standards

## TypeScript

- Keep `strict` mode clean; do not silence errors with `any` unless unavoidable.
- Prefer explicit exported types for API contracts and schemas.
- Use shared types from `src/types` where possible.

## Components

- Keep UI primitives in `src/components/ui`.
- Prefer composition over monolithic components.
- Mark client-only components with `"use client"`.
- Use semantic HTML and accessible labels/roles.

## Styling

- Use Tailwind utility classes.
- Use design tokens from `globals.css` (`bg-background`, `text-foreground`, etc.).
- Keep custom CSS minimal and token-based.

## Data & State

- Use TanStack Query for server state.
- Use Zustand only for client/UI/session state that is not query cache.
- Keep API calls in `services`, not directly in pages.

## I18n

- Use `next-intl` translation keys instead of hardcoded user-facing text.
- Add/update keys in both `messages/en.json` and `messages/fa.json`.
- Ensure RTL behavior works for Persian.

## Routing & App Files

- Keep route files slim; delegate logic to feature hooks/services.
- Provide loading/error/not-found boundaries for major route segments.

## Quality Gates

- Run `npm run lint` and `npm run build` before merging.
- Keep Husky pre-commit checks enabled with lint-staged.
