"use strict";

/* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.
*/

const greeting = ((messageStart = "Hey, that's") => {
  const greet = (str) => `${messageStart} ${str}`;
  const changeGreeting = (newMessage) => {
    messageStart = newMessage;
  };
  return { greet, changeGreeting };
})();

// var greeting = (Write IIFE here);

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(greeting.changeGreeting("Good Morning from"));
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily
