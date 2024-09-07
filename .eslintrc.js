module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'public/',
    'static/',
    '*.d.ts',
    'tailwind.config.js',
    'webpack.config.js',
    '.env',
    '.eslintcache',
    'coverage/',
    'reports/',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals', // Next.js recommended
    'plugin:tailwindcss/recommended', // TailwindCSS plugin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json', // Required for Airbnb TypeScript
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort', // For import sorting
    'tailwindcss',
  ],
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // Airbnb style modifications
    'react/react-in-jsx-scope': 'off', // Next.js doesn't require React to be in scope
    'jsx-a11y/anchor-is-valid': 'off', // Next.js uses its own Link component
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx'] }, // Restrict JSX to TSX files
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Tailwind specific rule
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'tailwindcss/no-custom-classname': 'off',

    // Import sorting
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Additional rules as per preference
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/button-has-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
