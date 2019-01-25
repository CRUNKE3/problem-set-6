/*
 * Hello. SOLUTION.
 */

function sayHello() { //declaring the first function
  let c = document.getElementById("canvas1"); //making the varible "c" equal canvas1
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas1's API

  ctx.clearRect(0, 0, c.width, c.height); //clearing the whole canvas when the function sayHello() is activated
  ctx.font = "48px sans-serif"; //creating the font style to use when stroking text onto canvas1
  ctx.strokeText("Hello, World!", 10, 50); //stroking "Hello, World!" onto canvas1 starting at the point (10, 50)
} //end of function sayHello()

/*
 * Rectangle. SOLUTION.
 */

function drawRectangle() { //declaring function drawRectangle()
  let height = Number(prompt("Height: ")); //making the variable "height" equal the number of whatever the user enters into the prompt (when the button is pressed, a prompt will appear saying "Height:"
  let width = Number(prompt("Width: ")); //making the variable "width" equal the number of whatever the user enters into the prompt (when the button is pressed, a prompt will appear saying "Width:" 
  let x = Number(prompt("X: ")); //making the variable "x" equal the number of whatever the user enters into the prompt (when the button is pressed, a prompt will appear saying "X:"
  let y = Number(prompt("Y: ")); //making the variable "y" equal the number of whatever the user enters into the prompt (when the button is pressed, a prompt will appear saying "Y:"

  let c = document.getElementById("canvas2"); //making the variable "c" equal where canvas2 is.
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas2's API
  ctx.clearRect(0, 0, c.width, c.height); //clearing the whole canvas of canvas2 when button is pressed

  if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(x) || Number.isNaN(y)) { //declaring an if statement that asks if one of the variables is not a number
    alert("One of your inputs is not a number."); //an alert appears saying "One of your inputs is not a number." if one of the variables (height, width, x, or y) is not a number
  } else if (width > 1023) { //declaring else if statement that asks if the variable "width" is greater than 1023
    alert("The rectangle will not fit on the canvas."); //an alert appears saying "The rectangle will not fit on the canvas." if "width" is greater than 1023
  } else if (width < 1) { //declaring else if statement that asks whether the variable "width" is less that 1
    alert("Your width is too small."); //an alert appears saying "Your width is too small." if "width" is less than 1
  } else if (height > 511) { //declaring else if statement that asks whether the variable "height" is greater than 511
    alert("The rectangle will not fit on the canvas."); //an alert appears saying "The rectangle will not fit in the canvas" if "height" is greater than 511
  } else if (height < 1) { //declaring else if statement that asks whether the variable "height" is less than 1
    alert("Your height is too small."); //an alert appears saying "Your height is too small." if "height" is less than 1
  } else if ((width + x) > 1023) { //declaring else if statement that asks whether "width" plus the variable "x" is greater than 1023
    alert("The rectangle will not fit on the canvas."); //alert appears saying "The rectangle will not fit in the canvas." if "width" plus "x" is greater than 1023
  } else if (x < 5) { //declaring else if statement asking whether the variable "x" is less than 5
    alert("Your x-coordinate is too small."); //an alert appears saying "Your x-coordinate is too small." if "x" is less than 5
  } else if ((height + y) > 511) { //declaring else if statement that asks whether "height" plus "y" is greater than 511
    alert("The rectangle will not fit on the canvas."); //an alert appears saying "the rectangle will not fit on the canvas." if "height" plus "y" is greater than 511
  } else if (y < 5) { //declaring else if statement that asks whether the variable "y" is less than 5
    alert("Your y-coordinate is too small."); //an alert appears saying "Your y-coordinate is too small" if "y" is less than 5
  } else { //declaring else statment if the variables don't apply to any of the if statements above (if the variables comply with restriction)
    ctx.strokeRect(x, y, width, height); //strokes the rectangle at the given points the user entered in each prompt as the default if non of the if statements are true
  } //end of else statement
} //end of function drawRectangle();

/*
 * Color. SOLUTION.
 */

function drawColoredRectangle() { //declaring function drawColoredRectangle()
  let c = document.getElementById("canvas3"); //making the variable "c" equal where canvas3 is
  let ctx = c.getContext("2d");//making the variable "ctx" allow an opening for canvas3's API
  ctx.clearRect(0, 0, c.width, c.height); //clearing the whole canvas of canvas3 when button is pushed. 

  let color = prompt("Color: "); //prompts the user to enter a color and will store the entry into the variable "color"
  if (color === "black"  || //declaring if statement on whether the variable "color" equals any of the values
      color === "blue"   ||
      color === "green"  ||
      color === "orange" ||
      color === "purple" ||
      color === "red"    ||
      color === "yellow") {

    ctx.fillStyle = color; //creates the fill style of the drawn rectangle to be the color stored in the variable "color"
    ctx.fillRect(10, 10, 100, 50); //draws the given rectangle with a width of 100 and a height of 50 at (10, 10) with the fill style written above
  } else { //declaring else statement if the variable "color" does not equal any of the values
    alert(color + " is not a supported color."); //alert appears saying whether or not the color you entered was on the list
  }//end of else statement
}//end of function drawColoredRectangle()

/*
 * Triangle. SOLUTION.
 */

function drawTriangle() { //declaring the function drawTriangle()
  let c = document.getElementById("canvas4"); //making the variable "c" equal where canvas 4 is
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas4's API

  let s1 = Number(prompt("Side 1: ")); //making the variable "s1" equal the number of whatever the user enters into the prompt
  let s2 = Number(prompt("Side 2: "));//making the variable "s2" equal the number of whatever the user enters into the prompt
  let s3 = Number(prompt("Side 3: "));//making the variable "s3" equal the number of whatever the user enters into the prompt

  if (Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3)) { //declaring if statement if the number of any of the variables is not a number
    alert("One of your inputs is not a number."); //an alert appears saying "One of your imputs is not a number" if one of the variables is not a number
  } else if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) { //declaring else if statement that asks whether 
      let side1 = Math.min(s1, s2, s3); //making the variable "side1" equal the smallest value of the three variables stated before
      let side3 = Math.max(s1, s2, s3); //making the variable "side3" equal the largest value of the three variables stated before
      let side2 = (s1 + s2 + s3) - side1 - side3; //making the variable "side2: equal the remaining value between the three variables stated before

      if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) { //declaring if statement if the value of side1^2 plus side2^2 is equal to side3^2 (basically its the pythagorean theorem)
        let x = 10; //making the variable "x" equal 10
        let y = 10; //making the variable "y" equal 10

        if ((y + side1) > 511 || (x + side2) > 1023) { //declaring if statement if the value of y plus the value of side1 is greater than 511, or if the value of x plus the value of side2 is greater than 1023
          alert("The triangle will not fit on the canvas."); //alert appears saying "The triangle will not fit on the canvas." if y+side1 is greater than 511 or if x+side2 is greater than 1023
        } else { //now referring to the default (if the if statement is false)
          ctx.beginPath(); //starts beginning to draw a path on canvas4

          ctx.moveTo(x, y); //states where the start to the first path in canvas4 (x and y are 10 so it the triangle will start being drawn from poitn (10, 10)
          ctx.lineTo(x, y + side1); //draws a line to the point (10, 10+the value of side1)
          ctx.lineTo(x + side2 y + side1); //draws another line to the point (10+the value of side2, 0+the value of side1)
          ctx.lineTo(x, y); //draws another line to the starting point (10, 10)

          ctx.closePath(); //closes the path so no more lines will be drawn
          ctx.stroke(); //strokes whatever was drawn on canvas4
        }
      } else {
        alert("This is not a valid right triangle."); //alert appears saying "This is not a valid right triangle." if (((side1 * side1) + (side2 * side2)) !== (side3 * side3)
      }
  } else {
    alert("That is not a valid right triangle.");//alert appears saying "This is not a valid right triangle." if Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3) is false
  }
} // end of function drawTriangle()

/*
 * Smile. SOLUTION.
 */

function drawSmileyFace() { //declaring function drawSmileyFace()
  let c = document.getElementById("canvas5");//making the variable "c" equal where canvas 5 is
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas5s API
  ctx.clearRect(0, 0, c.width, c.height); //clears the whole canvas

  let radius = Number(prompt("Radius: ")); //prompts the user "Radius:" and the value is stored in the variable "radius"

  if (Number.isNaN(radius)) { //declares if statement that asks if the value of "radius" is not a number. 
    alert("Your input is not a number."); //an alert appears saying "Your input is not a number" if the value of "radius" is not a number
  } else if (radius < 1) { //asks if the value of "radius is less than 1
    alert("Your radius is too small."); //alert appears saying "your radius is too small." if the value of "radius" is less than 1
  } else if ((radius * 2 + 10) > 511) { //asks if radius*2+10 is greater than 511
    alert("The smiley face will not fit on the canvas."); //alert appears saying "The smiley face will not fit on the canvas." if radius*2+10 is greater than 511
  } else { //run the code below if the other if statements are false
    let faceX = radius + 10; //makes the variable of "faceX" equal the value of "radius" plus 10
    let faceY = radius + 10; //makes the variable of "faceY" equal the value of "radius" plus 10

    ctx.beginPath(); //starts to begin the path in canvas5

    ctx.arc(faceX, faceY, radius, 0, Math.PI * 2, true);  // draw the face (the outer circle) using the values faceX, faceY, radius, and pi^2
    ctx.moveTo(faceX + radius - radius * 0.3, faceY); //moves to the next starting position
    ctx.arc(faceX, faceY, radius * 0.7, 0, Math.PI, false); // draw the mouth
    ctx.moveTo(faceX - radius * 0.35 + radius * 0.1, faceY - radius * 0.5); //moves to the next starting position
    ctx.arc(faceX - radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true); // left eye
    ctx.moveTo(faceX + radius * 0.35 + radius * 0.1, faceY - radius * 0.5); //moves to the next starting position
    ctx.arc(faceX + radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);  // right eye

    ctx.closePath(); //ends the paths to be made and lines and arcs to be drawn
    ctx.stroke(); //strokes the arcs onto canvas 5
  }
} //end of function drawSmileyFace()

/*
 * Star. SOLUTION.
 */

function drawStar() { //declaring function drawStar()
  let c = document.getElementById("canvas6"); //making the variable "c" equal where canvas 6 is.
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas6's API
  ctx.clearRect(0, 0, c.width, c.height); //clears the whole canvas

  let pts = 5; //makes the variable "pts" equal 5
  let x = 125; //makes the variable "x" equal 125
  let y = 125; //makes the variable "y" equal 125

  let outer = Number(prompt("Outer Radius: ")); //prompts the user saying "Outer Radius:" and stores the value into the variable "outer"
  let inner = Number(prompt("Inner Radius: ")); //prompts the user saying "Inner Radius:" and stores the value into the variable "inner"

  if (Number.isNaN(outer) || Number.isNaN(inner)) { //declares if statement asking if the value of the variables outer or inner is not a number
    alert("One of your inputs is not a number."); //alert appears saying "One of your inputs is not a number" if either variable's value is not a number
  } else if (outer < 2) { //asks if the value of the variable "outer" is less than 2
    alert("Your outer radius is too small."); //alert appears saying "Your outer radius is too small." if the value of the variable "outer" is less than 2
  } else if (inner < 1) { //asks if the value of the variable "inner" is less than 1
    alert("Your inner radius is too small.");//alert appears saying "Your inner radius is too small." if the value of the variable "inner" is less than 1
  } else if (outer <= inner) { //asks if the value of the variable "outer" is less than or equal to the value of the variable of "inner"
    alert("Your outer radius must be larger than your inner radius."); //alert appears saying "Your outer radius must be larger than your inner radius." if the value of the variable "outer" is less than or equal to the value of the variable of "inner"
  } else { //runs code below if the other if statements are false
    ctx.beginPath(); //starts paths in canvas 6

    for (let vtx = 0; vtx <= 2 * pts; vtx++) { //(makes the variable "vtx" equal 0; if the value of vtx is less than or equal to the product of 2 and the variable pts, then run the code below; add 1 to the value of the variable "vtx" and re run the restrictions of the for loop;
      let angle = vtx * Math.PI / pts - Math.PI / 2; //makes the variable "angle" equal the prodcut of the value of "vtx" and pi divided by the value of "pts" minus the product of pi and 2. 

      let radius; //creates the variable "radius" (has no value given to it)
      if (vtx % 2 == 0) { //asks if the remainder of the value of "vtx" divided by 2 is equal to 0. 
        radius = outer; //makes the value of radius equal the value of "outer" if the remainder of the value of "vtx" divided by 2 is equal to 0. 
      } else { //runs code below if the if statement above is false
        radius = inner; //makes the value of radius equal the value of "inner"
      }

      ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle)); //makes a line going to the point (125+ the value of "radius" * Math.cos(angle), 125 + the value of "radius" * Math.sin(angle))
    }

    ctx.closePath(); //ends the paths to be created in the drawing
    ctx.stroke(); //draws the paths created onto canvas 6. 
  }
} //end of function drawStar()

/*
 * Stop Sign. SOLUTION.
 */

function drawStopSign() { //declares function drawStopSign(); 
  let c = document.getElementById("canvas7"); //making the variable "c" equal where canvas 7 is.
  let ctx = c.getContext("2d");//making the variable "ctx" allow an opening for canvas7's API
  ctx.clearRect(0, 0, c.width, c.height); //clears the whole canvas of canvas 7

  let x = 10; //makes the variable "x" equal 10
  let y = 150; //makes the variable "y" equal 150
  let length = 80; //makes the variable "length" equal 80

  ctx.beginPath(); //starts drawing the path in canvas 7

  ctx.moveTo(x, y); //moves the starting point of the drawing equal (10, 150) (x and y are preset to these numbers)
  y = y - length; //changes the value of "y" to equal the difference of its value and the value of "length"
  ctx.lineTo(x, y); // draws a line from starting point to the new point of x and y (10, 70)

  let angle = 315.0; //makes the variable "angle" equal 315.0
  for (let i = 0; i < 7; i++) { //makes the value of "i" equal 0; if the value of i is less than 7, run the code below; after running the code add 1 to the value of i; then check again to see if the value of i still complies with restrictions of for loop;
    x = x + length * Math.cos(Math.PI * angle / 180.0); //changes the value of x to equal its orginal value plus the product of the value of length and the product of Math.cos(pi * the value of angle divided by 180
    y = y + length * Math.sin(Math.PI * angle / 180.0); //changes the value of y to equal its orginal value plus the product of the value of length and the product of Math.cos(pi * the value of angle divided by 180
    ctx.lineTo(x, y); //draws a line to the values of x and y

    angle = angle + 45.0; //the value of angle changes to be the sum of its original value and 45
    if (angle > 359.0) { //asks if the valueo of the variable "angle" is greater than 359.0
      angle = angle - 360.0; //makes the value of angle equal the difference between the original value of "angle" and 360.0
    }
  }

  ctx.fillStyle = "red"; //makes the fill style equal the color red
  ctx.closePath(); //ends the path of the figure in canvas 7
  ctx.fill(); //fills the figure with the fill style of the color red

  ctx.fillStyle = "white"; //changes the fill style to equal the color white
  ctx.font = "65px sans-serif"; //makes the font of the any text going to be drawn on canvas 7 to be 65px and sans-serif
  ctx.fillText("STOP", 18, 135); //starts to write the text "STOP" at point (18, 135) and fills it with the preset fill style of the color white
} //end of function drawStopSign()

/*
 * Pyramid. SOLUTION.
 */

function drawPyramid() { //declares function drawPyramid()
  let c = document.getElementById("canvas8");//making the variable "c" equal where canvas 8 is.
  let ctx = c.getContext("2d");//making the variable "ctx" allow an opening for canvas8's API
  ctx.clearRect(0, 0, c.width, c.height);//clears the whole canvas of canvas 8

  let length = Number(prompt("Length: ")); //prompts the user saying "Length: " and stores what the user entered in the prompt to the variable "length"

  if (Number.isNaN(length)) { //asks if the number value of the variable "length" is not a number
    alert("Your input is not a number."); //alert appears saying "Your input is not a number." if the number value of the variable "length" is not a number
  } else if ((length * 5 + 10) > 1023 || (length * 5 + 10) > 511) { //asks if the product of the value of length and 5 plus 10 is greater than 1023 or if the product of the value of length and 5 plus 10 is greater than 511
    alert("The pyramid will not fit on the canvas.");
  } else {
    let x = 10;
    let y = c.height - 10 - length;

    let offset = 0;
    for (let n = 0; n < 5; n++) {
      for (let o = 0; o < 5 - n; o++) {
        ctx.strokeRect(x + offset, y, length, length);
        offset = offset + length;
      }

      x = x + Math.floor(length / 2);
      y = y - length;
      offset = 0;
    }
  }
}

/*
 * House. SOLUTION.
 */

function drawHouse() { //declares the function drawHouse() 
  let c = document.getElementById("canvas9"); //making the variable "c" equal where canvas 9 is.
  let ctx = c.getContext("2d"); //making the variable "ctx" allow an opening for canvas9's API
  ctx.clearRect(0, 0, c.width, c.height);//clears the whole canvas of canvas 9

  let house = prompt("House Color: "); //prompts the user saying "House Color: " and stores the value the user enters into the variable "house"
  let door = prompt("Front Door Color: ");//prompts the user saying "Front Door Color: " and stores the value the user enters into the variable "house"

  if ((house !== "blue"   &&
       house !== "brown"  &&
       house !== "green"  &&
       house !== "orange" &&
       house !== "purple" &&
       house !== "red"    &&
       house !== "yellow") ||
      (door !== "blue"   &&
       door !== "brown"  &&
       door !== "green"  &&
       door !== "orange" &&
       door !== "purple" &&
       door !== "red"    &&
       door !== "yellow")) { //asks if the value of "house" or "door" is not equal to all of colors listed

    alert("One of your colors is not supported."); //alert appears saying "One of your colors is not supported" if the values of "house" or "door' is not equal to all of the colors listed
  } else { //runs code below if the if statement above is false 
    let width = c.width - 300; //make the variable of "width" equal the difference of the width of canvas 9 and 300. 
    let height = (c.height / 5) * 3; //makes the variable of "height" equal the quotient of the height canvas 9 and 5. 
    let x = 150; //makes the variable "x" equal 150
    let y = c.height - 10 - height; //makes the variable of "y" equal the difference of the height of canvas 9, 10, and the value of "height"

    // draw the frame
    ctx.fillStyle = house; //make the fill style of the frame of the house equal what the user entered in the prompt before
    ctx.fillRect(x, y, width, height); //starts the filling at point (150, c.height - 10 - height) with the size equal the values of the variables "width" and "height" 
    ctx.strokeRect(x, y, width, height); //actually draws the rectangle onto canvas 9

    // draw the roof
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    ctx.lineTo(x, y);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    // ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();

    // draw the door
    ctx.fillStyle = "gold";
    ctx.fillRect(c.width / 2 - 50, (c.height / 5) * 4 - 9, 100, 150);
    ctx.beginPath();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.fillStyle = door;
    ctx.fill();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.stroke();

    // draw windows
    ctx.fillStyle = "lightBlue";
    ctx.fillRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);

    ctx.strokeRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);
  }
}
