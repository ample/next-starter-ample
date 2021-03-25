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
  ]
}
