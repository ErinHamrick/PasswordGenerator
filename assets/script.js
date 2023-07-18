// access to generate button
var generateBtn = document.querySelector("#generate");
// character arrays
var lowercase = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var uppercase = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var special = [
	"#",
	"$",
	"%",
	"&",
	"'",
	"(",
	")",
	"*",
	".",
	"+",
	'"',
	"-",
	"<",
	">",
	"?",
	"^",
	"`",
	"{",
	"|",
	"}",
	"~",
	"\\",
];

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Generate random selection of array indices
function getRandomCharacter(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	var characterValue = array[randomIndex];
	return characterValue;
}

// primary function of page
function generatePassword() {
	var finalPassword = [];
	// Parses string input into integer
	var passwordLength = parseInt(
		prompt(
			"How long would you like your password to be? Must be a number between 8-128;"
		)
	);
	// Conditional statement to alert user if conditions are not met
	if (
		passwordLength < 8 ||
		passwordLength > 128 ||
		Number.isNaN(passwordLength)
	) {
		alert("Input must be a number between 8-128");
		return;
	}
	// variables for confirm functions
	var confirmLowercase = confirm(
		"Use lowercase letters in your password? Select cancel to opt out."
	);
	var confirmUppercase = confirm(
		"Use uppercase letters in your password? Select cancel to opt out."
	);
	var confirmSpecialCharacters = confirm(
		"Use special characters in your password? Select cancel to opt out."
	);
	var confirmNumber = confirm(
		"Use numbers in your password? Select cancel to opt out."
	);
	// empty variables to track options
	var characterOptions = [];
	var confirmations = 0;
	// Conditional statments to select character types
	if (confirmLowercase) {
		characterOptions = [...lowercase, ...characterOptions];
		var lowercaseLetter = getRandomCharacter(lowercase);
		finalPassword.push(lowercaseLetter);
		confirmations++;
	}
	if (confirmUppercase) {
		characterOptions = [...uppercase, ...characterOptions];
		var uppercaseLetter = getRandomCharacter(uppercase);
		finalPassword.push(uppercaseLetter);
		confirmations++;
	}
	if (confirmNumber) {
		characterOptions = [...numbers, ...characterOptions];
		var numbersAgain = getRandomCharacter(numbers);
		finalPassword.push(numbersAgain);
		confirmations++;
	}
	if (confirmSpecialCharacters) {
		characterOptions = [...special, ...characterOptions];
		var specialCharacters = getRandomCharacter(special);
		finalPassword.push(specialCharacters);
		confirmations++;
	} else {alert("Must choose at least one character type")}
	// Loops through conditional statements until all conditions are met then stops
	for (var i = 0; i < passwordLength - confirmations; i++) {
		finalPassword.push(getRandomCharacter(characterOptions));
	}
	return finalPassword.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
