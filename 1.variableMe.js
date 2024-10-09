"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeveloper = exports.myAge = exports.greeting = void 0;
var greeting = "Hi, this is Anup";
exports.greeting = greeting;
var myAge = 26;
exports.myAge = myAge;
var isDeveloper = true;
exports.isDeveloper = isDeveloper;
// there's no need to explicitly declare the data-type of a variable,
// typescript will autimatically detects the type based on the assigned value.
// This is also valid in TypeScript
var userId = 568644;
var userName = "Anup Kumar Jana";
var userIsAdmin = true;
console.log(greeting);
console.log(myAge);
console.log(isDeveloper);
// -------------------------------------------------------------------------------------------------
// "any" datatype
// we use datatype as "any" when we don't want to set any datatype to an variable
// we should not use this in our code.
var obj = { name: "jana" };
console.log(obj);
