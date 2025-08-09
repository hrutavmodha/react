const { rules } = require("eslint-config-prettier");

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'never'
        ],
        eqeqeq: [
            'error',
            'always'
        ],
        'no-console': 'warn',
        'no-debugger': 'error',
        '@typescript/eslint/no-unused-vars': [
            'error'
        ],
        '@typescript-eslint-/explicit-module-boundry-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/jsx-uses-vars': 'off',
        'jsx-a11y/no-onchange': 'off',
        'jsx-a11y/no-static-element-interactions': 'off'
    }
}