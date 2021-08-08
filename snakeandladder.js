class Game{
    constructor(position,dice,dicerolling)
    {
        this.position = position;
        this.dice = dice;
        this.dicerolling = dicerolling;
    }
}

let Player1 = new Game(0 ,0 , 0);
console.log(Player1) ;
console.log("start game");
while (Player1.position != 100)
{
    Player1.dice = Math.floor(Math.random()*7);
    let choice = Math.floor(Math.random()*3);
    switch(choice)
    {
            case 0:  
            if(Player1.position + Player1.dice <= 100)
            {
                Player1.position += Player1.dice;
                console.log("got ladder: " +Player1.position);
            }
            else
            Player1.position += 0;
                break;
            case 1:
                Player1.position -= Player1.dice;
                console.log("snake attack: " +Player1.position);
                if(Player1.position <= 0)
                {
                Player1.position = 0;
                }
                break;
            default:
                console.log("No play");
                break;
    }
    console.log("current position:" +Player1.position);
    Player1.dicerolling += 1;
}
console.log("die rolling number: " +Player1.dicerolling);
console.log("winning position: " +Player1.position);

        