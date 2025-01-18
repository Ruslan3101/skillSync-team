module.exports = {
  extends: ['../.eslint.config.js'],
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off', // В бэкенде использование console.log чаще всего разрешено
  },
};
