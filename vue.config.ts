module.exports = {
  lintOnSave: true,
  publicPath: "./",
  outputDir: "dist",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
};
