module.exports = {
  assetsDir: "static",
  pages: {
    index: {
      entry: "src/main.ts",
      title: "GTMNマインクラフト",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/colors.scss";',
      },
    },
  },
};
