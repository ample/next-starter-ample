module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-responsive-type": {},
    "postcss-pxtorem": {},
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
