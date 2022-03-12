// ===========
// Setup p5
// ===========

import p5 from "p5";

const canvasContainer = document.getElementById(
  "canvasContainer"
) as HTMLDivElement;
const p = new p5(function () {}, canvasContainer);

// ===========
// Project specific variables
// ===========

let runningTime = 0;

// ===========
// Project specific functions
// ===========

function normalizeScaling(scale: number) {
  p.translate(
    canvasContainer.clientWidth / 2,
    canvasContainer.clientHeight / 2
  );
  p.strokeWeight(scale * 0.1);
  p.textSize(scale);
}

// ===========
// p5 functions
// ===========

p.setup = () => {
  p.resizeCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
  p.textAlign(p.CENTER, p.CENTER);
  p.rectMode(p.CENTER);
  p.textFont("monospace")
};

p.draw = () => {
  const DRAW_SCALE = canvasContainer.clientHeight / 10;
  normalizeScaling(DRAW_SCALE);

  runningTime += p.deltaTime;

  p.background(0);

  // draw blue rectangle
  p.fill("blue");
  p.push();
  {
    p.rotate(p.sin(runningTime / 500) / 8);
    p.scale(1 + p.sin(runningTime / 300) * 0.1);
    p.rect(0, 0, DRAW_SCALE * 6);
  }
  p.pop();

  // draw "hi world" text
  p.rotate(p.sin(runningTime / 400) / 8);
  p.fill(255);
  p.text("hi world", 0, 0);
};

p.windowResized = () => {
  p.resizeCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
};
