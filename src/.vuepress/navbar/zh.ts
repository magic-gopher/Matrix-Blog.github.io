import { navbar } from "vuepress-theme-hope";
// zhNavbar 中文导航栏
export const zhNavbar = navbar([
  // 首页
  { text: "首页", icon: "home", link: "/" },
  { text: "工具库", icon: "tool", link: "/zh/tool/" },
  {
    text: "编程军火库",
    icon: "code",
    prefix: "/zh/program/",
    children: [
      {
        text: "Java语言",
        icon: "",
        link: "java/"
      },
      {
        text: "Go语言",
        icon: "",
        link: "go/"
      }
    ]
  }
]);
