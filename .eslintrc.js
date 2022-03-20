module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    quotes: [2, 'single'],
    'no-unused-vars': 'off'
  }
};
