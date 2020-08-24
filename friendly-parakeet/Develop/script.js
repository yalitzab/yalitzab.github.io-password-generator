//elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const passwordEl = document.getElementById('password');

const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//generate functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) * 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) * 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) * 48);
}

function getRandomSymbol(){
  const symbols = '!@#$%^&*()_+[]{}=<>?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 // Add event listener to generate button
//  generateBtn.addEventListener("click")

  // conts length = +lengthEl.value;
  // const hasLower = lowercaseEl.promptOptions;
  // const hasUpper = uppercaseEl.promptOptions;
  // const hasNumber = numbersEl.promptOptions;
  // const hasSymbol = symbolsEl.promptOptions;


// function promptUser() {

  // var txt;
  var promptCharNumber = window.prompt("Write the length of characters you what to generate. Write the from 8 to 128 characters.");
 
    // confirm lowercase
    if (confirm("Would you like to include lower case characters?")) {
      txt = "Password will include lowercase characters"
    }else{
      txt = "No lowercase included";
    }
    // document.getElementById("password").innerHTML =
    // txt;
    // }

    // confirm uppercase
    if (confirm("Would you like to include uppercase characters?")) {
      txt = "Password will include uppercase characters"
    }else{
      txt = "No uppercase included";
    }
    // document.getElementById("password").innerHTML =
    // txt;
  
    if (confirm("Would you like to include numeric characters?")) {
      txt = "Password will include number characters"
    }else{
      txt = "No numbers included";
    }
    // document.getElementById("password").innerHTML =
    // txt;
  
    if (confirm("Would you like to include symbols?")) {
      txt = "Password will include symbols"
    }else{
      txt = "No symbols included";
    }
    // document.getElementById("password").innerHTML =
    // txt;



  // var options = {
  //   charLength: promptCharNumber,
  //   charLower: promptLowChar,
  //   charUpper: promptUpperChar,
  //   charNumber: promptNumericChar,
  //   charSymbol: promptSymbolChar,

    
  // }
  // return options




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(allChar) {


  const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = allChar[Math.floor(Math.random() * 
        allChar.length)]
      passwordCharacters.push(string.fromAllChar(characterCode))
    }
    return generatePassword.joint('')
  }





  // Add event listener to generate button
  // generateBtn.addEventListener("click", promptUser);


generateBtn.addEventListener("click", startgame);

function startgame(){
  // var options = promptUser()
  // var passArray = createPasswordArray(options)
  // var genPass = generatePassword(passArray)
  // var passwordText = document.querySelector("#password");
  // passwordText.value = genPass;
}
