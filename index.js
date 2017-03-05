const path = require('path')

module.exports = (ctx, options = {}) => {
  const presets = [
    [require.resolve('babel-preset-env'), options.env]
  ]

  const plugins = [
    require.resolve('babel-plugin-preact-require'),
    require.resolve('babel-plugin-transform-class-properties'),
    [require.resolve('babel-plugin-transform-react-jsx'), {
      pragma: 'h'
    }],
    [require.resolve('babel-plugin-transform-object-rest-spread'), {
      useBuiltIns: true
    }],
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      moduleName: path.dirname(require.resolve('babel-runtime/package'))
    }]
  ]

  return {
    presets,
    plugins
  }
}
