import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const files = ['{src}/**/*.{js,ts}'];

export default defineConfig([
  { ignores: ['dist/*'] },
  eslintPluginPrettierRecommended,
  { files, plugins: { js }, extends: ['js/recommended'] },
  { files, languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);
