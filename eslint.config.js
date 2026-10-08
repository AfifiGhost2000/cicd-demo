const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const jest = require('eslint-plugin-jest')
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'webpack.config.js',
      'eslint.config.js',
      '.eslintrc.js',
      'node_modules/**',
      'dist/**'
    ]
  },

  js.configs.recommended,

  // Node-specific files
  {
    files: ['app.js', 'jest.setup.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'commonjs',
      globals: { ...globals.node }
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 0
    }
  },

  // React + Jest
  {
    files: ['src/**/*.{js,jsx}', 'test/**/*.{js,jsx}'],
    plugins: { react, jest },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest
      }
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'error',
      'react/prop-types': 0
    }
  },

  // ⭐ Playwright overrides (the missing piece)
  {
    files: ['playwright.config.js', 'e2e-tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-undef': 'off'
    }
  }
]
