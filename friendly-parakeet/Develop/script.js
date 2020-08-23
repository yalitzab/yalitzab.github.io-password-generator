// Assignment code here

// Arrays
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


var promptCharNumber = window.prompt("Write the lenght of characters you what to generate. Write the from 8 to 128 characters.");
var promptLowChar = window.prompt("Would you like to include lower case characters?");
var promptUpperChar = window.prompt("Would you like to include upper case characters?");
var promptNumericChar = window.prompt("Would you like to include numeric characters?");
var promptSymbolChar = window.prompt("Would you like to include special characters?");





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(characterAmount, includeUppercase, 
  includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount, i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(string.fromCharCode(characterCode))
    }
    return passwordCharacters.joint('')
  }


  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
const characterAmount = characterAmountNumber.value
const includeUppercase = includeUppercaseElement.value
const includeNumbers = includeNumbersElement.value
const includeSymbolscase = includeSymbolsElement.value
const password = generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols)
passwordDisplay.passwordText = password
