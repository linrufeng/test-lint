let vueWebpackConfig
try {
  vueWebpackConfig = require.resolve('@vue/cli-service/webpack.config.js')
} catch (e) {}

module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  settings: {
    'import/resolver': {
      ...vueWebpackConfig ? {
        [require.resolve('eslint-import-resolver-webpack')]: {
          config: require.resolve('@vue/cli-service/webpack.config.js')
        }
      } : {}
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never'
    }],
    // vue部分
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
      ignores: []
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off'
  }
}
