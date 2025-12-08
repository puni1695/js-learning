"use strict";     // treat all JS code as newer version

//alert(3+3)  // we r using node.js not browser

// console.log(3+3);    // code readability should be high
// console.log("Puneet")


let name = "Puneet"     //string => ""
let age = 28            //number => 2^53  if number is even bigger => bigint
let isLoggedIn = true   //boolean => true/false
                        //null   => standalone value
                        //undefined =>  value not assigned yet
                        //symbol => used for uniqueness


                        //object

// console.log(typeof undefined);  //undefined
// console.log(typeof null);  //object


/* Primitive:
    String, Number, Boolean, null, undefined, Symbol, BigInt



   Reference (Non Primitive)
    Arrays, Objects, Functions
*/

const score = 100
const value = 100.2

const isSignedIn = true
const outTemp = null;
let email;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNum = 39847234798732942798n
// console.log(bigNum);

const heroes = ["shaktiman", "nagraj", "doga"]
let obj = {
    name1:"Puneet",
    age: 28,
}

const print = function () {
    console.log("Hello World!!");
}

console.log(typeof bigNum);
console.log(typeof id);


