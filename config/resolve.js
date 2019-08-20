const path = require('path')

module.exports = {
  alias: {
    '@base': path.resolve(__dirname, '../'),
    '@src': path.resolve(__dirname, '../src'),
    '@styles': path.resolve(__dirname, '../styles'),
  },
  extensions: ['.js', '.jsx', '.json'],
  // modules: ['node_modules', 'src', path.resolve(__dirname, '../src')],
}
