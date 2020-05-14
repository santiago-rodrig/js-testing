const capitalize = (str) => {
  let result = '';
  let previousAndThis;
  str = str.split('');

  str.forEach((char, i) => {
    previousAndThis = str.slice(i - 1, i + 1).join('');

    if (/\s[a-z]/.test(previousAndThis) || (/[a-z]/.test(char) && i === 0)) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  });

  return result;
};

export default capitalize;
