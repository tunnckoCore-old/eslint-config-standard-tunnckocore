/*!
 * eslint-config-standard-tunnckocore <https://github.com/tunnckoCore/eslint-config-standard-tunnckocore>
 *
 * Copyright (c) 2017 Charlike Mike Reagent <open.source.charlike@gmail.com> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

module.exports = {
  extends: ['standard', 'standard-jsx', 'standard-react'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['fp', 'jsdoc'],
  rules: {
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/check-types': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-type': 'off',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-indent-props': 'warn',
    'react/jsx-indent': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'fp/no-loops': 'error',
    'fp/no-arguments': 'error',
    'fp/no-mutating-assign': 'off',
    'no-var': 'error',
    'linebreak-style': ['error', 'unix'],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'max-params': ['error', { max: 3 }],
    'max-statements': ['error', { max: 20 }],
    'max-statements-per-line': 'error',
    'max-nested-callbacks': ['error', { max: 5 }],
    'max-depth': ['error', { max: 5 }],
    'max-len': [
      'error',
      { ignoreTemplateLiterals: false, ignoreComments: true },
    ],
    'no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: true },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
  },
}
