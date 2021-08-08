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
while (Player.position != 100)
{
    let readline = require("readline-sync");
    let choice = Math.floor(Math.random()*3);
    switch(choice)
    {
            case 1:
                if(Player.position >= 100)
                console.log("you win");
                break;
            case 2:  
                Player.position += Player.dice;
                console.log("got ladder: " +Player.position);
                break;
            case 3:
                Player.position -= Player.dice;
                console.log("snake attack: " +Player.position);
                break;
            default:
                console.log("No play");
                break;
    }
    console.log("current position:" +Player.position);
}
console.log("winning position: " +Player.position);

        