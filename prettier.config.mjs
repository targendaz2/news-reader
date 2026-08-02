// @ts-check

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  organizeImportsSkipDestructiveCodeActions: true,
  printWidth: 140,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.jsonc',
      options: {
        trailingComma: 'none',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
};

export default config;
