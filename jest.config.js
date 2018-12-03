module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
};
