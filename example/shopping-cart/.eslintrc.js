const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules: {
    'import/no-deprecated': warn,
    'no-param-reassign': warn,
    'no-case-declarations': warn,
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
  },
  overrides: [
    {
      files: ['src/index.js'],
      rules: {
        'no-underscore-dangle': [error, { allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
      },
    },
    {
      files: ['**/*.test.js', '**/*.spec.js', 'src/setupTests.js'],
      rules: { 'import/no-extraneous-dependencies': [error, { devDependencies: true }] },
      env: {
        jest: true,
      },
    },
  ],
};
