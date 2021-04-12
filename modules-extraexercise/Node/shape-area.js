/* Challenge1 Task1: 
Complete the shape-area.js module. Your module must declare and export two functions with the following signatures: 
- circleArea(radiusLength).
- squareArea(sideLength).
You may create these as either named functions or anonymous function expressions.
*/

const PI = Math.PI;

const circleArea = (radiusLength) => console.log(radiusLength);

const squareArea = (sideLength) => console.log(sideLength);

// module.exports.myModule = {
//     circleArea, squareArea
// }

// import-export methode
export {
    circleArea, squareArea
}
// Define and export circleArea() and squareArea() below
