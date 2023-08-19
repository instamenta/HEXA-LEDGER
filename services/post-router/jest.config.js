module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   moduleFileExtensions: ['ts', 'js'],
   moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Update this path according to your project structure
   },
   testMatch: ['**/*.test.ts'], // Specifies test files naming convention
};