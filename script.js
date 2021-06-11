"use strict;"

//pie * radius^2
console.log("Area of a Circle")
function getAreaOfCircle (radius) {
    return Math.PI * radius**2;
}

//c= pi*r*2
console.log("Circumference of a Circle")
function getCircumferenceOfCircle (radius) {
    return Math.PI * radius *2;
}

//a=l*w
console.log("Area of a Square")
function  getAreaOfSquare (side) {
    return side *side;
}

//a=1/2 b*h
console.log("Area of Triangle")
function getAreaOfTriangle (base,height) {
    return 1/2 * base * height;
}

console.log(getAreaOfTriangle (10,4));
console.log(getAreaOfSquare (4));
console.log(getCircumferenceOfCircle (5));
console.log(getAreaOfCircle (79));

