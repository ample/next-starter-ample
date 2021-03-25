const path = require("path")

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, "../"),
    loaders: [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[local]-[hash:base64:3]"
          },
          sourceMap: true
        }
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          sourceMap: true,
          postcssOptions: {
            plugins: [
              "postcss-normalize",
              [
                "postcss-preset-env",
                {
                  features: {
                    "custom-properties": {
                      preserve: true,
                      warnings: true
                    }
                  },
                  stage: 1
                }
              ]
            ]
          }
        }
      },
      {
        loader: require.resolve("sass-loader"),
        options: {
          additionalData: `@use 'global' as *;`,
          sassOptions: {
            includePaths: [path.resolve(__dirname, "../src/styles")],
            implementation: require.resolve("sass")
          },
          sourceMap: true
        }
      }
    ]
  })

  return config
}
