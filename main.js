bear_X=0;
bear_Y=0;
function preload(){
    bear_face=loadImage("https://i.postimg.cc/KzwM9QkJ/grizzly-bear-close-up-face-66976167-removebg-preview-1.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(485,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_Net=ml5.poseNet(video,model_ready);
    pose_Net.on('pose',got_values);
}
function got_values(results){
    if(results.length > 0){
        console.log(results);
        bear_X=results[0].pose.nose.x;
        bear_Y=results[0].pose.nose.y;
        console.log("Nose X value="+results[0].pose.nose.x);
        console.log("Nose Y value="+results[0].pose.nose.y);
    }
}
function model_ready(){
    console.log("model is ready");
}
function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
    image(bear_face,bear_X-100,bear_Y-175,200,450);
}
function Snap(){
    save("bear.png");
}