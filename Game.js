class GameStates{
    constructor(){
    
    }
    StateSeeker(){
        var state=database.ref("GameState")
        state.on("value",function(data){
            GameState=data.val();
        })
    
    }
    update(game){
        database.ref("/").update({
            GameState:game
        })
    }
    async begin(){
        if(GameState===0){
            player=new Player();
            var count=await database.ref("PlayerCount").once("value")
            if(count.exists()){
               PlayerCount=count.val();
             
               player.getCount();
            }
            form=new Form()
            form.display()

        }
        redcar=createSprite(100,200);
        redcar.addImage(red1);
        bluecar=createSprite(300,200);
        bluecar.addImage(blue2);
        whitecar=createSprite(500,200);
        whitecar.addImage(white3);
        blackcar=createSprite(700,200);
        blackcar.addImage(black4);
        allCars=[redcar,bluecar,whitecar,blackcar]
    }
    play(){
        //form.hide();
        background("Brown");
        image(BGIMG,0,-displayHeight*3,displayWidth,displayHeight*5)
        Player.playerInfo();

        if(Playersave!=undefined){
            
            var y=0;
            var x=350;
           // var position=100;
            var index=0
            
            for(var i in Playersave){
            //    position=position+10;
            index=index+1;
            x=x+200;
            y=Playersave[i].Distance
             //console.log(Playersave[i].Distance)
             allCars[index-1].y=y
             allCars[index-1].x=x
            //console.log(index,player.index)
            if(index==player.index){
                
                //allCars[index].shapeColor="purple";
                fill("red")
                ellipse(x,y,100,100);
                

              camera.position.x=displayWidth/2;
              camera.position.y=allCars[index-1].y
            }
            if(keyDown(UP_ARROW)){
                player.distance-=10;
                player.update()
            }
            if(keyDown(DOWN_ARROW)){
                player.distance=10;
                player.update()
            }
            if(player.distance<=-2030){
                this.update(2);
                //console.log(GameState)
            }
            drawSprites();
        }
        
        }
    }
}
