export const generatePassword = (hasNumber = false, hasSymbol = false, len = 6) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '[]{}?!|-_*#^/()&%$£';

  let charset = alphabet;
  charset = hasNumber ? charset : charset + numbers;
  charset = hasSymbol ? charset : charset + symbols;

  let password = [];
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }
  return password.join('');
};
