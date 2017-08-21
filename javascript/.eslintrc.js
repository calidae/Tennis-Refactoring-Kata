// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-return-assign': 0
  },
  "globals": {
    "expect": true
  }
}
