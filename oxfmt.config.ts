import { defineConfig } from 'oxfmt';

const config = defineConfig({
  embeddedLanguageFormatting: 'auto',
  ignorePatterns: ['.claude/**/*.local.json'],
  jsdoc: true,
  printWidth: 140,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  sortImports: true,
  sortTailwindcss: false,
  sortPackageJson: true,
  overrides: [
    {
      files: ['*.css'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.jsonc'],
      options: {
        trailingComma: 'none',
      },
    },
    {
      files: ['*.svelte'],
      options: {
        svelte: {
          allowShorthand: true,
          indentScriptAndStyle: true,
        },
      },
    },
  ],
});

export default config;
