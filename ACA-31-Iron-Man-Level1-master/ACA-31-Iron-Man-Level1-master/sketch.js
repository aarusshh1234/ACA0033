var IronMan; ironImg;
var bg, backgroundImg;
var stoneGroup, stoneImage, stone;
var diamondsGroup, diamondImage;
var diamondsScore=0;

function preload() {
  backgroundImg = loadImage("images/space.png");
  ironImg= loadImage("images/iron.png");
  stoneImage=loadImage("images/stone.png");
  diamondImage=loadImage("images/diamond.png");
  diamondsScore=0;
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  
  
  IronMan=createSprite(200,505,20,50);
  IronMan.addImage(ironImg)
  IronMan.scale=0.2;
  IronMan.debug=true;
  IronMan.setCollider("rectangle",100,0,200,400)
  stoneGroup = new Group();
  diamondsGroup = new Group();

 
}

function draw() {
  if(keyDown("w")){
    IronMan.velocityY=-10;
  }
  if(keyDown("a")){
    IronMan.x=IronMan.x-5;
  }if(keyDown("d")){
    IronMan.x=IronMan.x+5;
  }
  IronMan.velocityY=IronMan.velocityY+0.5;

  generateStones();
  for(var i =0 ; i <(stoneGroup).length; i++){
    var temp = (stoneGroup).get(i);
    if(temp.isTouching(IronMan)){
      IronMan.collide(temp);
    }
  }
  generateDiamonds();
  for(var i=0;i<(diamondsGroup).length;i++){
    var temp=(diamondsGroup).get(i);
    
    if(temp.isTouching(IronMan)){
     
      diamondsScore++;
      temp.destroy();
      temp=null;
    }
  }
  



  
    drawSprites();
    textSize(20);
    text("Diamonds Collected:"+ diamondsScore,450,40);
    fill("white");
    

    function generateStones(){
      if(frameCount%70===0){
        var stone = createSprite(400,100);
        stone.y=random(50,450,200,30);
        stone.x=random(60,800,15,30);
        stone.addImage(stoneImage);
        stone.scale=0.9;
        stone.velocityY=6;
        stone.lifetime=250;
        stoneGroup.add(stone);
      }
    }

  
  function generateDiamonds(){
    if(frameCount%50===0){
      var diamond=createSprite(50,450,20,15);
      diamond.y=random(50,450,200,30);
      diamond.y = Math.round(random(400,100));
      diamond.x=random(60,800,15,30);
      diamond.addImage(diamondImage);
      diamond.scale=0.4;
      diamond.lifetime=250;
      diamondsGroup.add(diamond);
    }
  }
}
  