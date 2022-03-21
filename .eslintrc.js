module.exports = {
    extends: ['@jcmtallon/eslint-config-glamping-react-ts', '@jcmtallon/eslint-config-glamping-react-ts/hooks', "plugin:prettier/recommended"],
    parserOptions: {
        project: ["./tsconfig.json"]
    },
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
  }