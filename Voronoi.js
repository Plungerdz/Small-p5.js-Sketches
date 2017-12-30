let rawpoints = [];
let points = [];
let cnt = 20; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for (let i=0; i<cnt; i++) {
  rawpoints.push(createVector(random(width),random(height)));
  }
	
	for (let p of rawpoints) {
    let c=color(int(random(255)),int(random(255)),int(random(255)));
    let cp=new colorPoint(c,p);
    points.push(cp);
  }
  strokeWeight(4);
}

function draw() {
	for (let p of points) {
    p.show();
  }
	
	for (let x=0; x<=width; x+=1) {
        for (let y=0; y<=height; y+=1) {
          let mind=2e15;
          let minp = new colorPoint(null, null);
          for (let p of points) {
            let d=dist(x,y,p.pos.x,p.pos.y);
           if (d<mind) {
             mind=d;
             minp=p;
           } 
          }
          minp.show();
      }
  }
  
  noLoop();
}

class colorPoint {
  constructor(c, pos) {
    this.c = c;
    this.pos = pos;
  }
  
  show() {
    stroke(this.c);
    point(this.pos.x,this.pos.y);
  }
}
