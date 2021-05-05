let video;
let poseNet;
let pose = 0

function setup() {
  // console.log("I am setting up");
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0){
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log('ready');
}

function draw() {
  // background(220);
  // console.log("I am drawing");
  image(video, 0, 0);

  if (pose){
  noStroke();
  fill(255, 120, 100);
  triangle(pose.nose.x-25, pose.nose.y-25, pose.nose.x+25, pose.nose.y-25, pose.nose.x, pose.nose.y+25);
  // circle(pose.nose.x, pose.nose.y, 64);
  }
}
