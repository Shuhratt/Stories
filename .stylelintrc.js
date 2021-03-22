const { resolve } = require('path')

const basePath = resolve(__dirname, 'node_modules')

module.exports = {
  plugins: [`${basePath}/stylelint-csstree-validator`],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  rules: {
    // 'csstree/validator': false,
    'no-descending-specificity': [
      true,
      {
        ignore: [
          'selectors-within-list'
        ]
      }
    ],
    'selector-class-pattern': '^[a-z-_]+$',

  },
}
