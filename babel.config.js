module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './app',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
