class Game{
    constructor(){

    }
getstate(){
    var refgame=database.ref('Gamestate');
    refgame.on("value",function(data){
     Gamestate = data.val();
    })
}
update(state){
    database.ref('/').update({
        Gamestate:state
    })
}
async start(){
    if(Gamestate===0){
        player= new Player();
        var Playerref=await database.ref('Playercount').once("value");
        if(Playerref.exists()){
            playercount=Playerref.val();
            player.getcount();
        }
        form= new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(17);
    text("GAME HAS STARTED!",250,40);
    Player.getinfo();
    if(playerId!==undefined){
        var displaypos=100;
        for(var plr in playerId){
            if(plr==="player"+player.index){
            fill("purple");
            }
            else{
                fill("golden");
            }
        
        displaypos+=20;
        textSize(13);
        text(playerId[plr].name+"="+playerId[plr].distance,100,displaypos);
    }
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update();
}
}
}