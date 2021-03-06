/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var p = document.getElementById("canvas1").getContext("2d");
  p.font = "48px sans-serif";
  p.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  var p = document.getElementById("canvas2").getContext("2d");

    let height = prompt("Height:")

    let width = prompt("Width:")

    let topLeftX = prompt("X:")

    let topLeftY = prompt("Y:")

    if (height < 1) {
      alert("Your height value is too small");
    }
    if (width < 1) {
      alert("Your width value is too small");
    }
    if (height && width < 1) {
      alert("Your height/width value is too small");
    }
    if (topLeftX < 5) {
      alert("Your X value is too small")
    }
    if (topLeftY < 5) {
        alert("Your Y value is too small")
      }
    if (topLeftX && topLeftY < 5) {
      alert("Your X/Y value is too small")
    }
  p.strokeRect(topLeftX, topLeftY, width, height)
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  var p = document.getElementById("canvas3").getContext("2d");
  let color = prompt("Color:");

switch (color) {
  case "black":
    p.fillStyle = "black";
    p.fillRect(10, 10, 100, 50);
    break;
  case "blue":
    p.fillStyle = "blue";
    p.fillRect(10, 10, 100, 50);
    break;
  case "green":
    p.fillStyle = "green";
    p.fillRect(10, 10, 100, 50);
    break;
  case "orange":
    p.fillStyle = "orange";
    p.fillRect(10, 10, 100, 50);
    break;
  case "purple":
    p.fillStyle = "purple";
    p.fillRect(10, 10, 100, 50);
    break;
  case "yellow":
    p.fillStyle = "yellow";
    p.fillRect(10, 10, 100, 50);
    break;
  case "red":
    p.fillStyle = "red";
    p.fillRect(10, 10, 100, 50);
    break;
  default:
    alert("This color is unsupported");
}
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
var p = document.getElementById("canvas4").getContext("2d");

let side1 = Number(prompt("Side 1:")); //30
let side2 = Number(prompt("Side 2:")); //40
let side3 = prompt("Side 3:"); //50
let actualSide2 = side2 + 10; //40
let actualSide1 = side1 + 10; //50

let hypotenuse = Math.sqrt((side1**2)+(side2**2));
if (side3 == hypotenuse) {
  p.clearRect(0, 0, 1000, 1000)
  p.beginPath();
  p.moveTo(10, 10);
  p.lineTo(10, actualSide1);
  p.lineTo(actualSide2, actualSide1);
  p.closePath();
  p.stroke();
} else {
  alert("That is not a valid triangle");

}


}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

var p = document.getElementById("canvas5").getContext("2d");

let radiusHead = Number(prompt("Radius:"));
let radiusEye = radiusHead*0.1;
let radiusMouth = radiusHead*0.7;

//p.arc(x coordinate, y coordinate, radius, 0?, Math.PI * 2, true if full circle?)

p.clearRect(0, 0, 1000, 1000)
p.beginPath();
p.arc(75, 75, radiusHead, 0, Math.PI * 2, true);
p.stroke();
p.beginPath()
p.arc(75, 75, radiusMouth, 0, Math.PI, false);
p.stroke();
p.beginPath();
p.arc(60, 65, radiusEye, 0, Math.PI * 2, true);
p.stroke();
p.beginPath();
p.arc(90, 65, radiusEye, 0, Math.PI * 2, true);
p.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
var p = document.getElementById('canvas6').getContext('2d');
  p.clearRect(0, 0, canvas.width, canvas.height);
  let outer = Math.floor(Number(prompt("Outer Radius:")));
  let inner = Math.floor(Number(prompt("Inner Radius:")));
  if (isNaN(outer) || isNaN(inner)) {
    alert("One of your inputs is not a number.");
  } else if (outer <= inner) {
    alert("Your outer radius must be larger than your inner radius.");
  } else {
    p.moveTo(125, 125 - outer);
    let x = 1.5;

    for (let i = 0 ; i < 5; i++) {
      x += 0.2;
      p.lineTo((inner * Math.cos(x * Math.PI)) + 125, (inner * Math.sin(x * Math.PI)) + 125);
      x += 0.2;
      p.lineTo((outer * Math.cos(x * Math.PI)) + 125, (outer * Math.sin(x * Math.PI)) + 125);
    }

    p.stroke();
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

var p = document.getElementById("canvas7").getContext("2d");

p.beginPath();
p.moveTo(67, 10);
p.lineTo(147, 10);
p.lineTo(204, 67);
p.lineTo(204, 147);
p.lineTo(147, 204);
p.lineTo(67, 204);
p.lineTo(10, 147);
p.lineTo(10, 67);
p.lineTo(67, 10);
p.stroke();
p.fillStyle = "#FF0000";
p.fill();
p.closePath();

p.font = "65px Arial";
p.fillStyle = "white";
p.textAlign = "center";
p.fillText("STOP", 107, 127);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  var p = document.getElementById('canvas8').getContext('2d');
  p.clearRect(0, 0, canvas.width, canvas.height);
  let input = Math.floor(Number(prompt("Length:")));
  if (input > 100) {
    alert("The pyramid will not fit on the canvas.");
  } else if (isNaN(input)) {
    alert("Your input is not a number.");
  }else{

  let half = (input / 2);

  p.strokeRect(10, (502 - input), input, input);
  p.strokeRect((10 + input), (502 - input), input, input);
  p.strokeRect((10 + (input * 2)), (502 - input), input, input);
  p.strokeRect((10 + (input * 3)), (502 - input), input, input);
  p.strokeRect((10 + (input * 4)), (502 - input), input, input);

  p.strokeRect((10 + half), (502 - (input * 2)), input, input);
  p.strokeRect((10 + (half * 3)), (502 - (input * 2)), input, input);
  p.strokeRect((10 + (half * 5)), (502 - (input * 2)), input, input);
  p.strokeRect((10 + (half * 7)), (502 - (input * 2)), input, input);

  p.strokeRect((10 + input), (502 - (input * 3)), input, input);
  p.strokeRect((10 + (input * 2)), (502 - (input * 3)), input, input);
  p.strokeRect((10 + (input * 3)), (502 - (input * 3)), input, input);

  p.strokeRect((10 + (half * 3)), (502 - (input * 4)), input, input);
  p.strokeRect((10 + (half * 5)), (502 - (input * 4)), input, input);

  p.strokeRect((10 + (input * 2)), (502 - (input * 5)), input, input);

}
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
var p = document.getElementById("canvas9").getContext("2d");

p.clearRect(0, 0, canvas.width, canvas.height);
  p.lineWidth = 2;

  let colorH = prompt("House Color:");
  let colorD = prompt("Front Door Color:");

if (colorH != "blue" && colorH != "brown" && colorH != "green" && colorH != "orange" && colorH != "purple" && colorH != "red" && colorH != "yellow") {
  alert("One of your colors is not supported.");
} else if (colorD != "blue" && colorD != "brown" && colorD != "green" && colorD != "orange" && colorD != "purple" && colorD != "red" && colorD != "yellow") {
  alert("One of your colors is not supported.");
}else{
  p.beginPath();
  p.fillStyle = "gray";
  p.moveTo(512, 10);
  p.lineTo(150, 260);
  p.lineTo(850, 260);
  p.lineTo(512, 10);
  p.stroke();
  p.fill();
  p.closePath();

  p.beginPath();
  p.fillStyle = `${colorH}`;
  p.moveTo(150, 260);
  p.lineTo(150, 750);
  p.lineTo(850, 750);
  p.lineTo(850, 260);
  p.lineTo(150, 260);
  p.stroke();
  p.fill();
  p.closePath();


  p.fillStyle = "#ADD8E6";
  p.strokeRect(250, 360, 75, 75);
  p.fillRect(250, 360, 75, 75);

  p.fillStyle = "#ADD8E6";
  p.strokeRect(675, 360, 75, 75);
  p.fillRect(675, 360, 75, 75);

  p.fillStyle = "#ADD8E6";
  p.strokeRect(250, 625, 75, 75);
  p.fillRect(250, 625, 75, 75);

  p.fillStyle = "#ADD8E6";
  p.strokeRect(675, 625, 75, 75);
  p.fillRect(675, 625, 75, 75);

  p.fillStyle = `${colorD}`;
  p.strokeRect(450, 600, 100, 150);
  p.fillRect(450, 600, 100, 150);

  p.beginPath();
  p.moveTo(535, 675);
  p.fillStyle = "orange";
  p.arc(535, 675, 6, 0, (Math.PI * 2), false);
  p.stroke();
  p.fill();
  p.closePath();
}
}
