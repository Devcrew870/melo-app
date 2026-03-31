module.exports = {
  root: true,
  extends: [
    'expo', // Expo default rules
    'plugin:prettier/recommended', // integrates prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',

    // Optional custom rules 👇
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
