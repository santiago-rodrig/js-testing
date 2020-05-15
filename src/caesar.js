const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const caesar = (str, offset) => {
  const splitted = str.split('');
  let result = '';
  splitted.forEach(char => {
    if (/[A-Z]/.test(char)) {
      result += alphabet.charAt((alphabet.indexOf(char.toLowerCase()) + offset) % 26).toUpperCase();
    } else if (/[a-z]/.test(char)) {
      result += alphabet.charAt((alphabet.indexOf(char) + offset) % 26);
    } else {
      result += char;
    }
  });
  return result;
};
export default caesar;