const path = require('path');

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
    configure: (webpackConfig) => {
      // Remove ModuleScopePlugin which restricts imports to src/
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
      );

      // Disable source maps
      webpackConfig.devtool = false;

      // Ignore missing source maps warnings
      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/(?!@mediapipe)/,  // Ignore source maps from @mediapipe
      });

      return webpackConfig;
    },
  },
};
