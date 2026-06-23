
let myNmae = "John"; //Wrog variable name
let myName = "Johnn"; //corrected

//Task 7: Variables and Personal Information

let firstName = "Elijah";
let lastName = "Imaikop";
let age = 25;
let favoriteLanguage = "JavaScript";

console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old and my favorite programming language is ${favoriteLanguage}.`);

//Task 8: Simple calculator
let num1 = 10;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);

//Task 9:Age Checker
let ageCheck = 17;

if (ageCheck >= 18) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible yet");
}

//Task 10:Simple Function 
function greetUser(name) {
  console.log(`Hello, ${name}. Welcome to JavaScript.`);
}

greetUser("Elijah");
greetUser("Sarah");
greetUser("Michael");

//Task 11:Array Practice

let languages = ["JavaScript", "Python", "C++", "Java", "Ruby"];

console.log("First language:", languages[0]);
console.log("Last language:", languages[languages.length - 1]);

languages.push("Go"); // Add new language
languages.pop(); // Remove last language

console.log("Full array:", languages);

