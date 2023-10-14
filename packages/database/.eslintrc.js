module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["@daishi-motoyama/node"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
