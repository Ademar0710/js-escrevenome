function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    stroke("red");
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 15)
    }
  
  
  }