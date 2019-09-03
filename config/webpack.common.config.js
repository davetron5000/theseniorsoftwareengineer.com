const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs                   = require("fs");
const path                 = require("path");
const html_files           = require("./html_files");
const copy_assets          = require("./copy_assets");

const html_plugins = html_files({});
const all_plugins = html_plugins.concat(copy_assets);

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: all_plugins,
  entry: './site/js/index.js',
  mode: 'none'
};
