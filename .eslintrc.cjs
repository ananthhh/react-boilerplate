module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    "plugin:react/jsx-runtime",
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/triple-slash-reference': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
  }
}
