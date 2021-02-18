class Player{
    constructor(){
     this.name=null;
     this.distance=0;
     this.index=null;
    }
    getCount(){
            var state=database.ref("PlayerCount")
            state.on("value",function(data){
                PlayerCount=data.val();
            })
    }
    updateCount(Count){
        database.ref("/").update({
            PlayerCount:Count
        })
    }
    update(){
        var index="player/player"+PlayerCount
        database.ref(index).set({
            Name:this.name,
            Distance:this.distance
        })
    }
    static playerInfo(){
       var ref=database.ref("player")
       ref.on("value",data=>{Playersave=data.val()
    //console.log(Playersave)
})
       
    }
}