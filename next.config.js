const path = require("path")

module.exports = {
  publicRuntimeConfig: {
    DEBUG_MEDIA_QUERIES: process.env.DEBUG_MEDIA_QUERIES
  }
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@use 'global' as *;`
  }
}
