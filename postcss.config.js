module.exports = {
  plugins: [
    "postcss-normalize",
    [
      "rfs",
      {
        factor: 5
      }
    ],
    [
      "postcss-pxtorem",
      {
        mediaQuery: false,
        propWhiteList: [],
        replace: true,
        rootValue: 16
      }
    ],
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
    ],
    [
      "autoprefixer",
      {
        grid: "autoplace"
      }
    ],
    "postcss-em-media-query",
    [
      "postcss-sort-media-queries",
      {
        sort: "mobile-first"
      }
    ]
  ]
}
