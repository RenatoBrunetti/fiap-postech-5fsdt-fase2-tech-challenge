import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jestPlugin from 'eslint-plugin-jest';

const files = ['{src}/**/*.{js,ts}'];
const testFiles = ['**/*.test.ts', '**/*.spec.ts'];

export default defineConfig([
  { ignores: ['dist/*', 'node_modules/**', 'coverage/**', 'jest.config.ts'] },
  eslintPluginPrettierRecommended,
  { files, plugins: { js }, extends: ['js/recommended'] },
  { files, languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: testFiles,
    languageOptions: { globals: { ...globals.jest } },
    plugins: { jest: jestPlugin },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/valid-title': 'error',
    },
  },
]);
