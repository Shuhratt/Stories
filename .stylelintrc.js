module.exports = {
  plugins: ['stylelint-csstree-validator'],
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
