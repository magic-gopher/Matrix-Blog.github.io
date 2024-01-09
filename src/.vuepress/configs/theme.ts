import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "../navbar/zh.js";
import { zhSidebar } from "../sidebar/index.js";
import { AuthorName, Description } from "../utils/constant.js";
import { themePlugins } from "./plugins.js";
import { BlogIndexLogo } from "../utils/constant"

export default hopeTheme({

  // 当前网站部署到的域名
  hostname: "https://mister-hope.github.io",

  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "iconfont",

  // logo配置
  logo: BlogIndexLogo,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "matrix-gopher/Matrix-Blog.github.io",

  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",

  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  docsDir: "src",

  locales: {
    '/': {
      // 侧边栏
      sidebar: zhSidebar,
      // 导航栏
      navbar: zhNavbar,
      // 作者信息
      author: {
        name: AuthorName,
        url: "https://github.com/matrix-gopher",
      },
      // 博客相关
      blog: {
        description: Description,
        medias: {
          GitHub: 'https://github.com/matrix-gopher'
        },
        // 博客的侧边栏设置
        sidebarDisplay: "mobile",
      },

      // 页脚
      footer: '<a href="https://github.com/matrix-gopher/">Matrix</a>',
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },

      // 页面布局
      pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: themePlugins,
});
