// jest.config.js or jest.config.ts
module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/__test__/**/*.[jt]s?(x)'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};