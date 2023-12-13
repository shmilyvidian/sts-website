module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    "react/no-unused-state":'off',
    "react/prop-types": 'off',
    "react/no-array-index-key": 'off',
    "react/no-unknown-property": ['error', { ignore: ['css'] }],
    "react-hooks/exhaustive-deps": 'warn' // <--- THIS IS THE NEW RULE
  }
};
