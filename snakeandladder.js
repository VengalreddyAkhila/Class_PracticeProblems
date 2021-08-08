class Game{
    constructor(position,dice)
    {
        this.position = position;
        this.dice = dice;
    }
}

let Player = new Game(0 ,0);
console.log(Player) ;
console.log("start game");
while (Player.position != 100)
{
    Player.dice = Math.floor(Math.random()*7);
    let choice = Math.floor(Math.random()*3);
    switch(choice)
    {
            case 0:  
            if(Player.position + Player.dice <= 100)
            {
                Player.position += Player.dice;
                console.log("got ladder: " +Player.position);
            }
            else
            Player.position += 0;
                break;
            case 1:
                Player.position -= Player.dice;
                console.log("snake attack: " +Player.position);
                if(Player.position <= 0)
                {
                Player.position = 0;
                }
                break;
            default:
                console.log("No play");
                break;
    }
    console.log("current position:" +Player.position);
}
console.log("winning position: " +Player.position);

        