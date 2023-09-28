import type {Config} from 'jest';

const config: Config = {
   verbose: true,
   testEnvironment: 'node',
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   moduleDirectories: ['node_modules'],
    modulePathIgnorePatterns: ['./dist/'],
};

export default config;