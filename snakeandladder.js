class Game{
    constructor(position,dice)
    {
        this.position = position;
        this.dice = dice;
    }
}
let Player = new Game(0 ,Math.floor(Math.random()*7) );
console.log(Player) ;
console.log("start game");
let readline = require("readline-sync");
let number = readline.question("Enter the choice: ");
let choice = parseInt(number);
switch(choice)
{
    case 1:
       Player.position === 0
       console.log("no play");
    break;
    case 2:
        Player.position += Player.dice;
            if(Player.position == 0)
            {
                console.log("you lose ");
            }
            else
            {
            console.log("got ladder: " +Player.position);
            }
     break;
     case 3:
         Player.position -= Player.dice;
         console.log("snake attack: " +Player.position);
         break;
     default:
         console.log("invalid choice");
         break;
}

        