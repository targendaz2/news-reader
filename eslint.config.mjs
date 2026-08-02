// @ts-check

import prettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';
import svelte from 'eslint-plugin-svelte';

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

const config = defineConfig(
  {
    files: ['**/*.{js,ts}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ['**/*.story.{js,ts,svelte}'],
    // @ts-ignore
    extends: [storybook.configs['flat/recommended']],
  },
  prettier,
  svelte.configs['flat/prettier'],
);

export default config;
