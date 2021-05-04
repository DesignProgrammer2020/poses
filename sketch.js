let video;

function setup() {
  console.log("I am setting up");
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  // background(220);
  // console.log("I am drawing");
  image(video,0,0);
}