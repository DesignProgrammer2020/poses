let video;
let poseNet;

function setup() {
  console.log("I am setting up");
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
  console.log('ready');
}

function draw() {
  // background(220);
  // console.log("I am drawing");
  image(video, 0, 0);
}
