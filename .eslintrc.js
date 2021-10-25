module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: [
      'react', 
      '@typescript-eslint', 
      'jest', 
      'simple-import-sort',
    ],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/button-has-type': 'off',
      'no-param-reassign': [
        'error', 
        {
          'props': true, 
          'ignorePropertyModificationsFor': [
            'state'
          ]
        }
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
        }
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'react/destructuring-assignment': 'off',
      'import/no-cycle': [
        'error', 
        {
          maxDepth: 1,
        },
      ],
      'no-plusplus': [
        'error', { 
          allowForLoopAfterthoughts: true
        },
      ],
    }
  };
  