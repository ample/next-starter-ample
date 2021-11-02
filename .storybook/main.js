const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const postcssConfig = require('../postcss.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*stories.js'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        styleLoaderOptions: {
          esModule: true,
          modules: {
            namedExport: true
          }
        },
        cssLoaderOptions: {
          importLoaders: 2,
          esModule: true,
          modules: {
            localIdentName: '[local]-[hash:base64:3]',
            auto: true,
            namedExport: true,
            exportLocalsConvention: 'dashesOnly'
          },
          sourceMap: isDevelopment
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: postcssConfig.plugins
          }
        },
        sassLoaderOptions: {
          additionalData: `@use 'global' as *;`,
          sassOptions: {
            includePaths: [path.join(__dirname, '../src/styles')]
          }
        }
      }
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: {
          options: {
            configureJSX: true
          }
        }
      }
    },
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
    'storybook-dark-mode'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.resolve = {
      alias: {
        path: require.resolve('path-browserify')
      }
    };

    return config;
  }
};
