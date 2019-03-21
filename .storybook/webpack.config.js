const path = require('path');

module.exports = ({ config }) => {
  // TypeScript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
