let sh = require("superheroes");
let superhero = sh.random();
console.log("My Superhero: " + superhero);

var sv = require("supervillains");
var supervillain = sv.random();
console.log("The Supervillain " + supervillain + " is " + superhero + "'s archnemesis");