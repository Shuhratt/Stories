module.exports = {
  plugins: ['stylelint-csstree-validator'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  rules: {
    'csstree/validator': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-class-pattern': '^[a-z-_]+$'
  }
}
