module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    BMap: true,
    BMapLib: true,
    expect: true,
    sinon: true,
    jest: true,
    ht: true,
    tinymce: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential', // 默认引入了 plugins: ['vue']
    'plugin:@typescript-eslint/recommended', // 默认引入了 plugins: ['@typescript-eslint']
    /** plugin:prettier/recommended等价于:
     *
      "extends": ["prettier"], // 表示 eslint-plugin-prettier，需要放到最后以覆盖别的规则
      "plugins": ["prettier"], // 表示 eslint-config-prettier
      "rules": {
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off"
      }
     */
    'plugin:prettier/recommended'
    // 'prettier/@typescript-eslint' // 优先 prettier 中的样式规范
    // 'prettier/vue'
  ],
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析 .ts 文件
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    quotes: [2, 'single']
  }
};
