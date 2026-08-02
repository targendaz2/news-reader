// @ts-check

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-organize-imports'],
  organizeImportsSkipDestructiveCodeActions: true,
  printWidth: 140,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  override: [
    {
      files: ['**/*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
