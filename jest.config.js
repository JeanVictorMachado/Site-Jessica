module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/src/pages/index.tsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/index.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/styles.ts',
    '!src/pages/_document.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
