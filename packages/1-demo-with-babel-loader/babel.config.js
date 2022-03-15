module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3",
        targets: "> 0.25%, not dead", // 目标浏览器
        // targets: "chrome 90", //
      },
    ],
  ],
  /**
   * babel 在进行语法转换的过程中会生成一些helper函数, 该插件的作用:
   * 1. 将 helper 函数改为从 @babel/runtime 中引入, 而非全部放入到转换的文件内.
   * 2. 提供不污染全局的 polyfill, 一般在开发类库的时候使用
   */
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false, // 设置为 false, polyfill 交给 preset-env 来做
      },
    ],
  ],
};

/**
 *
 * 总结:
 * 参考:
 *
 * https://github.com/babel/babel/issues/10133
 *
 * https://github.com/babel/babel/issues/10008
 *
 * https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app
 *
 *  @babel/preset-env ( 按需 polyfill 污染全局的 ) + @babel/plugin-transform-runtime ( 提取helper函数 )
 */
