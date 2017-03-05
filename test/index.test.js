const babelPresetPreactApp = require('../')

test('main', () => {
  expect(typeof babelPresetPreactApp).toBe('function')
})
