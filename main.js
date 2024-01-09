difference = "";
 function preload(){
    
 }

 function setup(){
    
    canvas = createCanvas(600,400);
    canvas.position(900,100);

    video = createCapture(VIDEO);
    video.size(600,400);
   
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
  


function draw(){
    background('white');
    
    text('Tarun', 100,200);
textSize(difference);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
 if(results.length >0)
 {
    console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference =floor(leftWristX-rightWristX); 

    
    }
}