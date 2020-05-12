class Form{
    constructor(){
        this.input= createInput("Name");
        this.button= createButton("Play");
        this.greeting= createElement('h3');

    }
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title= createElement('h3');
    title.html("CarRacer");
    title.position(250,40);
    
   this.input.position(250,270);
    this.button.position(250,320);
    this.button.mousePressed(()=>{
        this.input.hide();
       this.button.hide();
        player.name= this.input.value();
        playercount+=1;
        player.update();
        player.updatecount(playercount);
        this.greeting.html("Welcome!"+ player.name);
        this.greeting.position(250,250);
    })
}
}