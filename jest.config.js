module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\@components\\/(.*)$': `<rootDir>/src/components/$1`,
    '\\@content\\/(.*)$': `<rootDir>/src/content/$1`,
    '\\@layout\\/(.*)$': `<rootDir>/src/layout/$1`,
    '\\@root\\/(.*)$': `<rootDir>/$1`,
    '\\@snippets\\/(.*)$': `<rootDir>/src/snippets/$1`,
    '\\@src\\/(.*)$': `<rootDir>/src/$1`,
    '\\@templates\\/(.*)$': `<rootDir>/src/templates/$1`,
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testURL: `http://localhost`,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
};
