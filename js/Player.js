class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
    }
getcount(){
    var Playerref=database.ref('Playercount');
    Playerref.on("value",function(data){
     playercount = data.val();
    })
}
updatecount(count){
    database.ref('/').update({
        Playercount:count
    })
}
update(){
    var playerindex="Players/player"+ this.index;
    database.ref(playerindex).set({
        Name:this.name, Distance:this.distance
    })
}
static getinfo(){
    var playerinfo= database.ref('Players');
    playerinfo.on("value",(data)=>{
        playerId=data.val();
    });
}
}