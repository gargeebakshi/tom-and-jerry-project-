var cat;
var mouse;
var backgroundImage;

function preload() {
    backgroundImage=loadImage("garden.png");
    catImage=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImage=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-cat.mouse.x<(cat.width-mouse.width)/2)
    cat.velocityX=0;
    cat.addAnimation("cat2.png",catImage);
    cat.changeAnimation("cat2.png");

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouse.png2",mouseImage);
mouse.changeAnimation("mouse.png2");
mouse.frameDelay=25;

if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouse.png3",mouseImage);
    mouse.changeAnimation("mouse.png3");
}





}
  //For moving and changing animation write code here


}
