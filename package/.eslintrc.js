const { peerDependencies } = require('../package/package.json');
const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: ["airbnb", "plugin:import/errors", "plugin:import/warnings"],
  settings: {
    "import/core-modules": Object.keys(peerDependencies)
  },
  plugins: ["import"],
  rules: {
    "import/no-deprecated": warn
  },
  overrides: []
};
