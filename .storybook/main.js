module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.js"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false
      }
    },
    "@storybook/addon-jest",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[local]-[hash:base64:3]"
            },
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            // additionalData: `@use 'global' as *;`,
            sassOptions: {
              // includePaths: [path.resolve(__dirname, "../src/styles")],
              implementation: "sass"
            },
            sourceMap: true
          }
        }
      ]
    })

    return config
  }
}
