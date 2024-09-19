// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   ignorePatterns: [
//     'node_modules/',
//     '.next/',
//     'out/',
//     'scripts/',
//     'tools/',
//     'public/',
//     'static/',
//     '*.test.js',
//     '*.test.ts',
//     '*.test.tsx',
//     '*.spec.js',
//     '*.spec.ts',
//     '*.spec.tsx',
//     '.env',
//     '.env.local',
//     '.env.development',
//     '.env.production',
//     '.eslintrc.js',
//     'postcss.config.mjs',
//     'postcss.config.js',
//     'tailwind.config.js',
//     'next.config.mjs',
//   ],
//   extends: [
//     'airbnb',
//     'airbnb/hooks',
//     'airbnb-typescript',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:prettier/recommended',
//     'next/core-web-vitals', // Next.js recommended
//     'plugin:tailwindcss/recommended', // TailwindCSS plugin
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//     project: './tsconfig.json', // Required for Airbnb TypeScript
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint',
//     'prettier',
//     'simple-import-sort', // For import sorting
//     'tailwindcss',
//   ],
//   rules: {
//     // Prettier integration
//     'prettier/prettier': 'error',

//     // Airbnb style modifications
//     'react/react-in-jsx-scope': 'off', // Next.js doesn't require React to be in scope
//     'jsx-a11y/anchor-is-valid': 'off', // Next.js uses its own Link component
//     'react/jsx-filename-extension': [
//       'error',
//       { extensions: ['.tsx'] }, // Restrict JSX to TSX files
//     ],
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     // Function component definitions rule: allow both arrow and function components
//     'react/function-component-definition': [
//       'error',
//       {
//         namedComponents: 'arrow-function',
//         unnamedComponents: 'function-declaration',
//       },
//     ],
    
//     // Avoid using array index as key in JSX
//     'react/no-array-index-key': 'warn',

//     // Tailwind specific rule
//     'tailwindcss/classnames-order': 'warn', // Warn on improper Tailwind order
//     'tailwindcss/migration-from-tailwind-2': 'off',
//     'tailwindcss/no-custom-classname': 'off',

//     // Import sorting
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',

//     // Additional rules as per preference
//     '@typescript-eslint/no-unused-vars': ['error'],
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     'react/button-has-type': 'off',

//     // Enforce curly braces for JSX only when necessary
//     'react/jsx-curly-brace-presence': [
//       'error',
//       { props: 'never', children: 'never' },
//     ],
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// };


import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
})