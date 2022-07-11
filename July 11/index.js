// Operators in Javascript
//  Arithmetic Operator
 var x = 40;
 var y = 36;
 
 console.log("Addition of x and y : ", x+y);
 console.log("Subtraction of x and y : ", x-y);
 console.log("Multiplication of x and y : ", x*y);
 console.log("Division of x and y : ", x/y);

// Assignment Operator

var z = x;

console.log("Value of z : ", z+2);

// Comparison Operator

let a = 4;
let b = 5;

// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a < b);

//Logical Operator

console.log(true && true);
console.log(true && false);           // AND Operator
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || fasle);           // OR Operator
console.log(false || true);
console.log(false || false);

console.log(!true);                  // NOT Operator

// Variables

var g = 007;
var str1 = "Gaurav007";

// null
let n1 = null;
console.log(n1);

// Arrays 
let marks = {ram:100, shyam:55, Mohan:78};
console.log(marks);
console.log(marks["ram"]);
let arr1 = [2,"Ram",null,45];
console.log(arr1);
console.log(arr1[2]);

//Conditionals

age = 18;
if(age > 18){
    console.log("You can Drink Anything");
} else {
    console.log("Go Watch POGO");
}