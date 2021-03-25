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
            localIdentName: "[local]___[hash:base64:5]"
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
          sassOptions: {
            implementation: require.resolve("sass")
          },
          sourceMap: true
        }
      }
    ]
  })

  return config
}
