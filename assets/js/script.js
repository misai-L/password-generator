function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var charSelect = window.prompt('How many characters would you like your password to be?');
  var inputNum = window.confirm('Would you like numbers in your password?');
  var inputSpecial = window.confirm('Would you like special characters in your password?');
  var inputUpper = window.confirm('Would you like any uppercase letters in your password?');
  var inputLow = window.confirm('Would you like any lowercase letters in your password?');
  var createPassword = [];

  if (charSelect >= 8 && charSelect <= 128) {
    if (inputNum) {
      createPassword.push(generateNum());
    }
    if (inputSpecial) {
      createPassword.push(generateSpecial());
    }
    if (inputUpper) {
      createPassword.push(generateUpp());
    }
    if (inputLow) {
      createPassword.push(generateLow());
    }
    while (createPassword.length < charSelect) {
      createPassword.push(generateRandomChar(inputNum, inputSpecial, inputUpper, inputLow));
    }
  } else {
    window.alert('Please enter a valid number between 8 and 128.');
    return generatePassword();
  }

  return shuffleArray(createPassword).join('');
}

// add function generateCharselect, needs some sort of xxx.length var, maybe??

function generateNum() {
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numeric[Math.floor(Math.random() * numeric.length)];
}

function generateSpecial() {
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  return special[Math.floor(Math.random() * special.length)];
}

function generateUpp() {
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return upper[Math.floor(Math.random() * upper.length)];
}

function generateLow() {
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return lower[Math.floor(Math.random() * lower.length)];
}


function generateRandomChar(includeNum, includeSpecial, includeUpper, includeLow) {
  var options = [];

  if (includeNum) {
    options.push(generateNum());
  }
  if (includeSpecial) {
    options.push(generateSpecial());
  }
  if (includeUpper) {
    options.push(generateUpp());
  }
  if (includeLow) {
    options.push(generateLow());
  }

  return options[Math.floor(Math.random() * options.length)];
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);