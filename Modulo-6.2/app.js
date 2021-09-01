// EJERCICIO 1: ENIGMA

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var userNormalText = () => document.getElementById('normal').value;
var userEncriptedTex = () => document.getElementById('encrypted').value;

var encriptedText = () =>
  (document.getElementById('encrypted').value = transformMessage(
    userNormalText(),
    plainAlphabet,
    encryptedAlphabet
  ));
var decriptedText = () =>
  (document.getElementById('normal').value = transformMessage(
    userEncriptedTex(),
    encryptedAlphabet,
    plainAlphabet
  ));

var searchIndex = (alphabet, letter) => {
  for (i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) return i;
  }
  return -1;
};

var transformLetter = (letter, origin, destiny) => {
  var letterIndex = searchIndex(origin, letter);
  var transformed = destiny[letterIndex];
  return letterIndex === -1 ? letter : transformed;
};

var transformMessage = (message, origin, destiny) => {
  var messageLowerCased = message.toLowerCase();
  var result = '';

  for (var letter of messageLowerCased) {
    result = result + transformLetter(letter, origin, destiny);
  }
  return result;
};

var getEncryption = () => {
  encriptedText();
};

var getDecryption = () => {
  decriptedText();
};

document.getElementById('encrypt').addEventListener('click', getEncryption);
document.getElementById('decrypt').addEventListener('click', getDecryption);

// EJERCICIO 2: GENERADOR ALEATORIO

let numbers = [];

var randomPick = (n, min, max) => {
  var range = max - min + 1;
  var getRandomNumber = () => Math.floor(Math.random() * range) + min;

  for (let i = 0; i < n; i++) {
    numbers[i] = getRandomNumber();
    console.log(numbers[i]);
    if (numbers[i] === numbers[i++]) {
      numbers[i] = getRandomNumber();
    }
  }
  return numbers;
};

console.log(randomPick(10, 1, 100));
