module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js', '**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  // Ignorer les erreurs de couverture
  coverageReporters: ['text', 'lcov', 'json'],
  testTimeout: 10000,
  // Éviter les avertissements inutiles
  verbose: true
};
