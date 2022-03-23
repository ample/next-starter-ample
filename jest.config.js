module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '\\@components\\/(.*)$': `<rootDir>/components/$1`,
    '\\@content\\/(.*)$': `<rootDir>/content/$1`,
    '\\@layout\\/(.*)$': `<rootDir>/layout/$1`,
    '\\@root\\/(.*)$': `<rootDir>/$1`,
    '\\@templates\\/(.*)$': `<rootDir>/templates/$1`,
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/.jest/__mocks__/file.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '<rootDir>/node_modules/babel-jest',
      { configFile: './.jest/.babelrc' },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
