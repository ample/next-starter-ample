const path = require("path")
const postcssPlugins = require("./postcss.config")

// ---------------------------------------------------------

module.exports = {
  requireConfigFile: false,
  publicRuntimeConfig: {
    DEBUG_MEDIA_QUERIES: process.env.DEBUG_MEDIA_QUERIES
  },
  postcssOptions: {
    postcssPlugins
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@use 'global' as *;`
  }
}
