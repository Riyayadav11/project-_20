var bgImg;
var cat;
var mouse1,mouse2,mouse3,mouse4;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg =loadAnimation("cat1.png");
    mouse1Img=loadAnimation("mouse1.png");
    mouse2Img=loadAnimation("mouse2.png");
    mouse3Img=loadAnimation("mouse3.png");
    mouse4Img=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(860,600);
    cat.addAnimation("catsitting,catImg1");
    cat.scale=0.2;

}

function draw() {

    background(garden.png);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocity=0;
    cat.addAnimation(catLastImg,catImg3);
    cat.changeAnimation("catLastImg");
    cat.x=300;
    cat.scale=0.2;
    }

    drawSprites();
    bgImg.display();
}


function keyPressed(){

  //For moving and changing animation write code here


}
