var greeting = prompt("Enter a sentence");

var firstLetter = greeting.charAt(0);


greeting[greeting.length-1];

var lastLetter = greeting[greeting.length-1];

var uppercaseLetter = firstLetter.toUpperCase();
var uppercaseLastLetter = lastLetter.toUpperCase();

var newString = function(uppercaseLetter, uppercaseLastLetter) {
  return (uppercaseLetter + uppercaseLastLetter);
}

var newStringR = function(uppercaseLastLetter, uppercaseLetter) {
  return (uppercaseLastLetter + uppercaseLetter);
}

alert(greeting + newStringR(uppercaseLastLetter, uppercaseLetter));

var greetingLength = greeting.length;

var fourthFunction = function(greetingLength) {
  return (greetingLength / 2);
}

var fixedNumber = fourthFunction(greetingLength).toFixed();

var randomLetter = greeting.charAt(fixedNumber);

var finalAlert = function(randomLetter, greeting) {
  return (randomLetter+greeting+newStringR(uppercaseLastLetter, uppercaseLetter));
 };

 alert(finalAlert(randomLetter, greeting, newStringR));

function reverseString(finalAlert) {
  return finalAlert.split("").reverse().join("");
};

alert(reverseString(finalAlert(randomLetter, greeting, newStringR)));





jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is about a mammal.");
  });

  jQuery("p").click(function() {
    alert("This is about manateeeeeees!!!!");
  });

jQuery(".innocent").click(function() {
  alert(finalAlert(randomLetter, greeting, newStringR));
});

jQuery(".mean").click(function() {
  alert(reverseString(finalAlert(randomLetter, greeting, newStringR)));
});
  });
