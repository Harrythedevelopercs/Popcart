module.exports = {
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "next",
      "next/core-web-vitals",
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
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
}
