# Folder Structure

```text
src/
  app/
    [locale]/
      (auth)/
      (dashboard)/
      layout.tsx
      page.tsx
      loading.tsx
      error.tsx
      not-found.tsx
    layout.tsx
    globals.css
  components/
    ui/
    common/
    forms/
    layouts/
    providers/
    modals/
    data-table/
    typography/
  config/
  constants/
  features/
    auth/
    users/
  hooks/
  i18n/
  lib/
    api/
    firebase/
  services/
  stores/
  types/
messages/
docs/
```

## Conventions

- **`app`**: Route-level files only.
- **`components/ui`**: Generic unopinionated primitives.
- **`components/*`**: Reusable presentation components.
- **`features`**: Feature-first architecture with internal API/hooks/schemas/components.
- **`services`**: External API contracts.
- **`lib`**: Framework-level utilities (axios/firebase/helpers).
- **`stores`**: Global client-side UI/session state.
- **`config`**: Environment, i18n, routes, and site metadata.
