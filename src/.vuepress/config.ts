import { defineUserConfig } from "vuepress";
import theme from "./configs/theme.js";
import { BaseURI, Favicon } from "./utils/constant.js";
import { configPlugins } from "./configs/plugins.js";
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({

  // BaseURI设置
  base: BaseURI,

  // 设置favicon
  head: [
    ['link', { rel: 'icon', href: Favicon }]
  ],

  // 多语言配置
  locales: {
    // 中文配置
    '/': {
      lang: "zh-CN",
      title: "gopher笔记",
      description: "分享学习的开源笔记",

    },
    // 英文设置
    '/en': {
      lang: "en-US",
      title: "Hello World",
      description: "vuepress-theme-hope 的博客演示",
    }
  },

  // 主题
  theme,

  markdown: {
  },

  alias: {
    '@websites': path.resolve(__dirname, './public/assets/websites'),
  },
  // 插件
  plugins: configPlugins,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
