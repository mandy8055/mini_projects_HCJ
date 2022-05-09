const resultEl = document.getElementById('result');
const lengthField = document.getElementById('length');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numberCheck = document.getElementById('numbers');
const symblCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Event Listeners
generateBtn.addEventListener('click', () => {
  const len = Number(lengthField.value);
  const hasLower = lowercaseCheck.checked;
  const hasUpper = uppercaseCheck.checked;
  const hasNumber = numberCheck.checked;
  const hasSymbol = symblCheck.checked;
  resultEl.innerText = generatePassword(
    len,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

function generatePassword(len, hasLower, hasUpper, hasNumber, hasSymbol) {
  let generatedPassword = '';
  const typesArr = [...arguments].splice(1).filter(Boolean);
  if (typesArr.length === 0) {
    return '';
  }
}

const generateRandom = (initNum, offset) =>
  // To generate a random number b/w initNum upto initNum + offset
  Math.floor(Math.random() * offset) + initNum;

const getRandomLower = () => String.fromCharCode(generateRandom(97, 26));

const getRandomUpper = () => String.fromCharCode(generateRandom(65, 26));

const getRandomNumber = () => String.fromCharCode(generateRandom(48, 10));

const getRandomSymbol = () =>
  '!@#$%^&*(){}[]=<>/,.'.charAt(generateRandom(0, 20));

// global object
const getAllRandom = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbr: getRandomNumber,
  symbl: getRandomSymbol,
};
