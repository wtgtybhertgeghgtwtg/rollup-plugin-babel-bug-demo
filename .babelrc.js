module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {node: '8.6'},
        useBuiltIns: 'usage',
      },
    ],
  ],
};
