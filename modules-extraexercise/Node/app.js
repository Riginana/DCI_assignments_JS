// import-export methode
import * as myModule from "./shape-area.js";
/*Challenge1 Task2:
Complete the program, app.js.

First, import the shape-area.js module using the require() function (shape-area.js is in the same folder as app.js). Choose one of the two options below for storing the returned module.exports object:

A) Store the entire module.exports object in the variable areaFunctions.
B) Use object destructuring to extract the .circleArea() and .squareArea() methods into their own variables, circleArea and squareArea.
Next, call the circleArea() function with the provided variable radius as an input. Assign the returned value to the variable areaOfCircle.

Then, call the squareArea() function with the provided variable sideLength as an input. Assign the returned value to the variable areaOfSquare.

You may print the values of areaOfCircle and areaOfSquare to the console to see your code work!
*/

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
const areaFunctions = myModule;

// Option 2: import circleArea and squareArea with object destructuring

// node methode
// const { myModule } = require("./shape-area");

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = myModule.circleArea(radius);
const areaOfSquare = myModule.squareArea(sideLength);


