module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8
  }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [ 'eslint:recommended', 'next'],
  overrides: [
    
  ],
  rules: {
    "no-unused-vars": "off",
  }
}