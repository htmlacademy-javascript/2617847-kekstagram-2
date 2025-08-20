// Задача #1


function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

// Задача #2

function palindromeCheck (string = '') {
  string = string.toString();
  string = string.toLowerCase();
  string = string.replaceAll(" ", "");

  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
}

// Задача #3

function extractNumbers (string) {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
}
console.log(extractNumbers)
