module.exports = {
    extends: ['@jcmtallon/eslint-config-glamping-react-ts', '@jcmtallon/eslint-config-glamping-react-ts/hooks', "plugin:prettier/recommended"],
    parserOptions: {
        project: ["./tsconfig.json"]
      }
  }