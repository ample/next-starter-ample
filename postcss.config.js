module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-responsive-type": {},
    "postcss-pxtorem": {
      mediaQuery: true,
      propWhiteList: [],
      replace: true,
      rootValue: 16
    },
    "postcss-preset-env": {
      features: {
        "custom-properties": {
          preserve: true,
          warnings: true
        }
      },
      stage: 2
    },
    autoprefixer: {
      grid: "autoplace"
    }
  }
}
