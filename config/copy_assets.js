const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  new CopyWebpackPlugin(
    [
      { from: './site/images/**/*', to: './images', flatten: true, ignore: [ "Icon.pxm", "Icon.png" ] },
      { from: './site/pdf/**/*', to: './pdf', flatten: true },
      { from: './site/fonts/**/*', to: './fonts', flatten: true },
      { from: './site/images/favicon.ico', to: '.', flatten: true }
    ],
    {
      debug: true
    }
  )
];
