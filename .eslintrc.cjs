/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "off" }],
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
