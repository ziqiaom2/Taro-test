export default {
  navigationBarTitleText: "首页",
  mini: {
    webpackChain(chain, webpack) {
      chain
        .plugin("analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, []);
    },
  },
};
