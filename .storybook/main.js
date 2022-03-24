const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const postcssConfig = require('../postcss.config');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*stories.js'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: {
          options: {
            configureJSX: true,
          },
        },
      },
    },
    '@storybook/addon-jest',
    'storybook-addon-next',
    'storybook-dark-mode',
  ],
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve = {
      alias: {
        assert: false,
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, '../components'),
        '@content': path.resolve(__dirname, '../content'),
        '@layout': path.resolve(__dirname, '../layout'),
        '@root': path.resolve(__dirname, '../'),
        '@templates': path.resolve(__dirname, '../templates'),
      },
    };

    return config;
  },
};
