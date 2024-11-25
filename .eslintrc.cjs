module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "space-in-parens": ["error", "never"],
  },
};
