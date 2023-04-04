let x = 0;
let y = 0;
let spacing = 100;
let probability = 0.2;

function setup() {
	createCanvas(900, 900);
	background(240);
	rectMode(CENTER);
	colorMode(HSB);
}

function draw() {
	//for (let j = 0; j < 6; j++) {
	for (let j=0; j<3; j++) {
		//for (let i = 0; i < 7; i++) {
		for (let i=0; i<3; i++){
			let prob = random(1);
			if (prob < 0.333) {
				cig();
				noLoop();
			} else if (prob > 0.333 && random(1) < 0.667) {
				beer();
				noLoop();
			} else {
				coffeeCup();
			}
			//translate(150, 0);
			translate(300, 0)
		}
		//translate(-1000, 150);
			translate(-900, 300);
	}
}


//function for the cigarette
function cig() {
	//the filter 
	fill(48, 15, 99);
	rect(140, 200, 135, 20);

	//the body 
	fill(42, 53, 90);
	rect(100, 200, 70, 20);

	//the fire
	fill(17, 95, 100);
	rect(210, 200, 10, 20);

	//the ash
	fill(140, 7, 27);
	rect(215, 200, 5, 20);

	//the smoke
	noFill();
	beginShape();
	curveVertex(215, 200);
	curveVertex(215, 200);
	curveVertex(240, 100);
	for (let i = 0; i < 5; i++) {
		let r = random(20, 70);
		curveVertex(200 + int(r), 80 - int(r));

	}
	noLoop();
	curveVertex(215, 0);
	curveVertex(215, 0);
	endShape();
}



function coffeeCup() {
	//bottom body of coffee cup
	fill(48, 15, 99);
	beginShape();
	vertex(110, 235);
	vertex(190, 235);
	vertex(200, 105);
	vertex(100, 105);
	vertex(110, 235);
	endShape();

	//top of the cup
	fill('green');
	rect(150, 100, 120, 10);
	noLoop();
	rect(150, 90, 100, 10);

	//hand-saver
	fill(42, 53, 90);
	beginShape();
	vertex(96, 120);
	vertex(204, 120);
	vertex(200, 170);
	vertex(100, 170);
	vertex(96, 120);
	endShape();
	//logo
	noLoop();
	fill('green');
	circle(150, 145, 40);
}



//function for the beer can 
function beer() {
	fill(48, 15, 99);
	rect(150, 150, 80, 120);

	//bottom of the beer can 
	fill(45, 85, 99);
	beginShape();
	vertex(110, 210);
	vertex(120, 220);
	vertex(180, 220);
	vertex(190, 210);
	vertex(110, 210);
	endShape();

	//top of the beer can
	fill(48, 15, 99);
	beginShape();
	vertex(120, 80);
	vertex(180, 80);
	vertex(190, 90);
	vertex(110, 90);
	vertex(120, 80);
	vertex()
	endShape();

	//logo 
	fill('blue');
	circle(150, 170, 50);
	fill(45, 85, 99)
	circle(150, 170, 35);

	//text
	fill('blue');
	textSize(25);
	let str = "lite";
	text(str, 150, 130, 60, 60);
}

function keyPressed() {
	if (key == "s") {
		save("mySketch.png");
	}
}