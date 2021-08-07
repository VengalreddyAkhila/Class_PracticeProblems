class Player{
    constructor(position,dice)
    {
        this.position = position;
        this.dice = dice;
    }
}
let game = new Player(0 ,Math.floor(Math.random()*7) );
console.log(game ) ;
console.log("start game");
