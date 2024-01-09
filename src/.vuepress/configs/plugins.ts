import { PluginConfig } from "vuepress";
import { PluginsOptions } from "vuepress-theme-hope";
import { containerPlugin } from "@vuepress/plugin-container";
import { renderProjects } from "../containers/projects.js";


// VuePress插件配置
export const configPlugins: PluginConfig = [
    // 自定义容器插件
    containerPlugin({
        type: 'projects',
        render: (tokens, idx) => {
            return renderProjects(tokens, idx)
        }
    })
]

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
    blog: {
        // 启动热更新插件
        hotReload: true,
        // 时间轴访问路径修改成archives
        timeline: "archives",
        filter: ({ filePathRelative }) => {
            // 舍弃那些不是从 Markdown 文件生成的页面
            if (!filePathRelative) return false
            // 舍弃zh/tool文件夹的页面
            return !filePathRelative.startsWith('zh/tool/');
        }
    },

    components: {
        components: ["Badge", "VPCard"],
    },


    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({ tag }) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: { type: "tip" },
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
    },
}