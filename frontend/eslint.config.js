import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Base JS/TS/React settings
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked[0].rules,
      ...pluginReact.configs.recommended.rules,
      // TURN OFF OLD RULES
      'react/react-in-jsx-scope': 'off',
    },
  },

  // JSON files
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    plugins: { json },
    languageOptions: { language: 'json' },
    rules: {
      ...json.configs.recommended.rules,
    },
  },

  // Markdown files
  {
    files: ['**/*.md'],
    plugins: { markdown },
    languageOptions: { language: 'markdown' },
    rules: {
      ...markdown.configs.recommended.rules,
    },
  },

  // CSS files
  {
    files: ['**/*.css'],
    plugins: { css },
    languageOptions: { language: 'css' },
    rules: {
      ...css.configs.recommended.rules,
    },
  },
]);
