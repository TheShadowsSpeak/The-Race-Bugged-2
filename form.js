class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html("The Race")
        title.position(displayWidth/2, 0);
        var input=createInput("Name")
        input.position(displayWidth/2-20,displayHeight/4-90);
        var button=createButton("Start the Race")
        button.position(displayWidth/2+10,displayHeight/4);
        var greeting=createElement('h1')
        var resetbutton=createButton("Restart");
        resetbutton.position(displayWidth/2-30,30)
        button.mousePressed(function(){
         input.hide()
         button.hide()
         var name=input.value();
         PlayerCount=PlayerCount+1
         player.name=name;
         player.update()
         player.updateCount(PlayerCount)
         greeting.html("Welcome "+ name);
         greeting.position(displayWidth/2-20,displayHeight/4)
         player.index=PlayerCount;
         console.log(PlayerCount)
        })
        resetbutton.mousePressed(function(){
        game.update(0);
        player.updateCount(0)
        }
        )
    }
}