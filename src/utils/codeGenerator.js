const generatePin = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const generateRandomCode = (prefix, length, groupSize) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomPart = '';
  for (let i = 0; i < length - prefix.length; i++) {
    randomPart += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const code = `${prefix}${randomPart}`;
  return code.match(new RegExp('.{1,' + groupSize + '}', 'g')).join(' ');
};

export const generateCode = (brand) => {
  switch (brand) {
    case 'Flipkart':
      return {
        code: generateRandomCode('', 16, 4),
        pin: generatePin()
      };
    case 'Amazon':
      return {
        code: generateRandomCode('', 14, 4),
        pin: null
      };
    case 'Google Play':
      return {
        code: generateRandomCode('', 18, 4),
        pin: null
      };
    case 'Xbox':
      return {
        code: generateRandomCode('', 15, 3),
        pin: null
      };
    case 'PlayStation':
      return {
        code: generateRandomCode('', 12, 4),
        pin: generatePin()
      };
    default:
      return {
        code: generateRandomCode('', 10, 4),
        pin: null
      };
  }
};
