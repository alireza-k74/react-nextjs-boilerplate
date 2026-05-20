import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**"]),
  {
    files: ["src/components/data-table/**/*.{ts,tsx}"],
    rules: {
      // TanStack Table returns unstable function refs; safe to use, but skipped by React Compiler.
      "react-hooks/incompatible-library": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*/*"],
              message:
                "Import from feature public API (index.ts) only. Keep features isolated.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
