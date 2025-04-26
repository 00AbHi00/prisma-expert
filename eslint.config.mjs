// eslint.config.js
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
    },
  },

  // 🔕 Ignore auto-generated or build output
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "src/generated/**", // Prisma or WASM
    ],
  },
]);
