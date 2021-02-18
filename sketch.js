var database, name;
var GameState, PlayerCount, player, form, game;
var Playersave; 
var redcar,bluecar,whitecar,blackcar;
var red1,blue2,white3,black4;
var allCars;
var BGIMG;
function preload(){
  red1=loadImage("car2.png");
  blue2=loadImage("car3.png")
  white3=loadImage("car1.png");
  black4=loadImage("car4.png")
  BGIMG=loadImage("track1.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  GameState=0;
  game=new GameStates()
 game.StateSeeker()
 game.begin()
 Playersave=[]
 allCars=[]
 
 
}

function draw() {
  background("blue");  
  
  if(PlayerCount===4){
    GameState=1;
   game.update(1)
  }
  if(GameState===1){
    game.play()
  }
  
}

