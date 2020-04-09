module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/styles/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 56.52,
      lines: 65.38,
      statements: 64.29
    }
  },
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
