var Gamestate=0, database, game, player, form, playercount=0;
var playerId;
var distance=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game=new Game();
   game.getstate();
   game.start();
}


function draw(){
    background("white");
if(playercount===4){
    game.update(1);
}
if(Gamestate===1){
    clear();
    game.play();
}
}



