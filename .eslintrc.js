module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'jquery': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
