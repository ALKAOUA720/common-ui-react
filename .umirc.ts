import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      component: "@/pages/index/index.tsx",
      routes: [
        {
          path: '/',
          component: "@/pages/index/index.tsx",
          title: 'common-ui',
        },
      ]
    },
  ],
  history: {
    type: 'hash',
  },
  npmClient: 'pnpm',
  title: 'Common UI',
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',
});
