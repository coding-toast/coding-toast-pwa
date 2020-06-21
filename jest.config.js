module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json',
      diagnostics: false
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
  },
  resolver: undefined
}
