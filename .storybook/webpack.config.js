const path = require("path")

module.exports = ({ config }) => {
  // Support sass files with PostCSS plugins
  config.module.rules.push({
    test: /\.scss$/,
    // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
          sourceMap: true
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

  // Support PostCSS
  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, "../"),
    use: [
      {
        loader: require.resolve("postcss-loader")
      }
    ]
  })

  return config
}
