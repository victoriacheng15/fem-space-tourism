module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'func-names': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'react/function-component-definition': 0,
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
  },
};
