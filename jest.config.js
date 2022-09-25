/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
