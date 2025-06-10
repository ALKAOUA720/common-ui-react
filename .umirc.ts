import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      component: "@/pages/index/index.tsx",
      routes: [
        {
          path: "/",
          component: "@/pages/index/index.tsx",
          title: "common-ui",
        },
      ],
    },
  ],
  history: {
    type: "hash",
  },
  hash: true, // 开启 hash 模式，让 build 之后的产物包含 hash 后缀
  npmClient: "pnpm",
  title: "Common UI - React",
  publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
});
