import { sidebar } from "vuepress-theme-hope";

// zhSidebar 中文侧边栏
export const zhSidebar = sidebar({
  "/zh/program/": [
    {
      text: "Go语言",
      icon: "book",
      prefix: "go/",
      collapsible: true,
      children: [
        {
          text: "Go语言基础",
          icon: "write",
          collapsible: true,
          link: "basic/"
        },
        {
          text: "Go高级",
          icon: "write",
          collapsible: true,
          link: "advanced/"
        }
      ]
    },
    {
      text: "Java语言",
      icon: "book",
      prefix: "java/",
      collapsible: true,
      children: "structure"
    }
  ],
  "/zh/tool": "structure"
});
