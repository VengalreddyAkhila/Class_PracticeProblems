
class Game{
    constructor(position,dice,type)
    {
        this.position = position;
        this.dice = dice;
        this.type = type;
    }
}
let Player1 = new Game(0 ,0 ,0);
let Player2 = new Game(0 ,0,0);
console.log(Player1) ;
console.log(Player2);
console.log("start game");
while (Player1.position != 100 && Player2.position != 100)
{
    Player1.dice = Math.floor(Math.random()*7);
    Player2.dice = Math.floor(Math.random()*7);
    let randomplayer = Math.floor(Math.random()*2);
    let choice = Math.floor(Math.random()*3);
    console.log("startgame:" ,randomplayer);
    let gameplayer;
    if(randomplayer == 0)
    {
        gameplayer = Player1;
    }
    else
    {
        gameplayer = Player2;
    }
    console.log("game is started:" ,gameplayer.dice);    
    switch(choice)
    {
            case 0:  
            if(gameplayer.position + gameplayer.dice <= 100)
            {
                gameplayer.position += gameplayer.dice;
                console.log("got ladder: " +gameplayer.position);
            }
            //extra chance to play game again
            var extrachance = gameplayer.dice;
            console.log("player gets extra chance: " +extrachance);
            if(gameplayer.position + gameplayer.dice <= 100)
            {
                gameplayer.position += gameplayer.dice;
            }
                break;
            case 1:
                gameplayer.position -= gameplayer.dice;
                console.log("snake attack: " +gameplayer.position);
                if(gameplayer.position <= 0)
                {
                gameplayer.position = 0;
                }
                break;
            default:
                console.log("No play");
                break;
    }
    console.log("current position:" +gameplayer.position);
   
}
if(Player1.position == 100)
{
    console.log("player1 won game: " +Player1.position);
}
else if(Player2.position == 100)
{
    console.log("Player2 won game: " +Player2.position);
}