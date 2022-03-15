# eslint 配置

[参考](https://eslint.vuejs.org/user-guide/#faq)

## 1. 校验 js

eslint

"eslint:recommended"

## 2. 校验 vue

eslint-plugin-vue

"plugin:vue/essential"

## 3. prettier 美化代码

插件 + 配置 (解决 eslint 和 prettier 的冲突)

prettier eslint-plugin-prettier eslint-config-prettier

## 4. ts eslint 配置

"@typescript-eslint/eslint-plugin" 规则
@typescript-eslint/parser 解析器


parserOptions: {
  parser: '@typescript-eslint/parser' // 解析 .ts 文件
},

# eslint plugin 和 extend 的区别

plugin 用来拓展 eslint 额外的校验规则

extends 可以看成是 plugin 和 rules 的集合
