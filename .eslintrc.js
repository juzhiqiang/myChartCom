module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 用于支持测试环境
    jest: true,
  },
  extends: "airbnb-base",
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
  rules: {
    quotes: ["error", "double"],
    // 设置需要隐藏的规则
    "import/prefer-default-export": 0,
  },
};
