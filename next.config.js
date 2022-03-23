const path = require('path');
const postcssPlugins = require('./postcss.config');

// ---------------------------------------------------------

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  postcssOptions: {
    postcssPlugins
  },
  publicRuntimeConfig: {
    DEBUG_MEDIA_QUERIES: process.env.DEBUG_MEDIA_QUERIES
  },
  requireConfigFile: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use 'global' as *;`
  }
};
