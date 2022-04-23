img="";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
image(img, 0, 0, 640, 420);
text("Dog", 45, 75);
fill("#FF0000");
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);
}