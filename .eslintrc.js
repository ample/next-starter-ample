module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['next/core-web-vitals'],
  overrides: [
    {
      files: ['./pages/**/*.js', './templates/**/*.js'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['./**/fixtures.js', './**/stories.js'],
      rules: {
        'import/no-anonymous-default-export': 0,
      },
    },
  ],
  plugins: ['jest', 'prettier', 'sort-keys-fix'],
  rules: {
    'react/no-unescaped-entities': [2, { forbid: ['<', '>', '{', '}'] }],
    'react/prop-types': [
      2,
      {
        ignore: [
          'activeClassName',
          'backgroundImageClassName',
          'className',
          'contentClassName',
          'key',
          'size',
        ],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: true },
    ],
    'sort-keys-fix/sort-keys-fix': 1,
  },
};
