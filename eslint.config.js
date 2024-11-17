import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  {
    rules: {
      'comma-dangle': 'off',
      'no-shadow': 0,
      'no-plusplus': 0,
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'vue/max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreHTMLAttributeValues: true,
        },
      ],
      'no-tabs': 0,
      radix: 0,
      'prefer-const': 0,
      'no-param-reassign': 0,
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],
      semi: ['error', 'always'],
      'prefer-arrow-callback': 0,
      'arrow-body-style': 0,
      'implicit-arrow-linebreak': 0,
      'function-paren-newline': 0,
      'no-confusing-arrow': 0,
      'no-continue': 0,
      'eol-last': 0,
      'default-case': 0,
      'no-alert': 0,
      'consistent-return': 0,
      'no-new': 0,
      'func-names': 0,
      'prefer-template': 'warn',
      camelcase: 'warn',
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 0,
      'no-underscore-dangle': 0,
      'spaced-comment': 0,
      'no-multi-assign': 0,
      'no-prototype-builtins': 0,
      'nonblock-statement-body-position': 0,
      'arrow-parens': ['error', 'as-needed'],
      'guard-for-in': 0,
      'no-restricted-syntax': 0,
      'no-return-assign': 0,
      'padded-blocks': 0,
      curly: ['error', 'all'],
      'no-extra-parens': [
        'error',
        'all',
        {
          nestedBinaryExpressions: false,
        },
      ],
      'no-multiple-empty-lines': [
        'warn',
        {
          max: 1,
        },
      ],
    },
  }
];
