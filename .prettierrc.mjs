// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  arrowParens: 'always',
  bracketSameLine: false,
  objectWrap: 'preserve',
  bracketSpacing: true,
  semi: false,
  experimentalOperatorPosition: 'end',
  experimentalTernaries: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  proseWrap: 'preserve',
  endOfLine: 'lf',
  insertPragma: false,
  printWidth: 100,
  requirePragma: false,
  tabWidth: 2,
  useTabs: false,
  embeddedLanguageFormatting: 'auto'
}
