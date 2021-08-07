//start the game position is 0
let readline = require("readline-sync");
let n = readline.question("Enter the  position: ");
function position(n){
    if(n == 0)
    console.log("start the game");
}
console.log(position(n));
//roll the die between 1 to 6
let Dice=Math.floor(Math.random()*7);
console.log("Dice number : "+Dice);