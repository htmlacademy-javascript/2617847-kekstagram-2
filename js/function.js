// Задача #1


function checkStringLenght (string, maxLength) {
  if (string.lenght <= maxLenght) {
    return true;
  }
  else {
    return false;
  }
};

// Задача #2

function palindromeCheck (string = '') {
  string = string.toString();
  toLowerCase();
  replaceAll(" ", "");

  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
};

// Задача #3

function extractNumbers (string) {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.lenght - 1; i++) {
    if (Number.isNaN(parseInt(stringi[i]. 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? Nan : Number(result);
}
