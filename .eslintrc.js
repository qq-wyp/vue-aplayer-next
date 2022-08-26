const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.vue'],
      },
    },
  },
  rules: {
    "import/no-extraneous-dependencies":'off',
    "vuejs-accessibility/mouse-events-have-key-events":['off'],
    "vuejs-accessibility/click-events-have-key-events":['off'],
    "no-plusplus":'off',
    "max-len": ["error", { "code": 150 }],//行的最大长度150
    "vuejs-accessibility/alt-text":['off'],
    "vuejs-accessibility/anchor-has-content":['off'],
    "vuejs-accessibility/form-control-has-label":['off'],
    "no-param-reassign":'off',
    "radix":'off',
    "vuejs-accessibility/media-has-caption":['off'],
    "no-return-assign":'off',
    "no-unused-expressions":['off'],
    "global-require":['off'],
  }
}