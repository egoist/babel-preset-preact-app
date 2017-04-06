const path = require('path')

const env = process.env.BABEL_ENV || process.env.NODE_ENV

module.exports = () => {
  const presets = [
    env === 'test' ? [require('babel-preset-env').default, {
      targets: {
        node: 'current'
      }
    }] : [require('babel-preset-env').default, {
      modules: false,
      targets: {
        ie: 9,
        uglify: true
      }
    }]
  ]

  const plugins = [
    require.resolve('babel-plugin-transform-decorators-legacy'),
    require.resolve('babel-plugin-preact-require'),
    require.resolve('babel-plugin-transform-class-properties'),
    [require.resolve('babel-plugin-transform-react-jsx'), {
      pragma: 'h'
    }],
    require.resolve('babel-plugin-transform-object-rest-spread'),
    [require.resolve('babel-plugin-transform-runtime'), {
      // Resolve the Babel runtime relative to the config.
      moduleName: path.dirname(require.resolve('babel-runtime/package'))
    }]
  ]

  return {
    presets,
    plugins
  }
}
