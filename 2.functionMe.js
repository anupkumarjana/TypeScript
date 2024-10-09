"use strict";
// in case of function parameter data-type is compulsory
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------number------------------------------
function addTwo(num) {
    return num + 2;
}
addTwo(10);
// --------------------------string------------------------------------
function getUpperCase(val) {
    return val.toUpperCase();
}
getUpperCase("happy, happy, happy");
// -----------------------------multiple params---------------------------------------
function signUpUser(name, email, password, isPaid) {
    console.log(name, email, password, isPaid);
}
signUpUser("Anup", "anup@gmail.com", "123456", true); // in case of function parameter data-type
// ------------------------------arrow function and default value----------------------------------------------
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, password, isPaid);
};
loginUser("Anup", "anup@gmail.com", "51654"); // I'm not giving any argument on isPaid and its not giving me error
// beacuse if the default value
// --------------------------------------------function all on variable-----------------------------------------------------
// (num: number) is for argument type and  :number is for return type
function addThree(num) {
    //  return type is compulsory in function
    return num + 2;
    //   return "hello";
}
var result = addThree(10);
// here's the problem!!!! we passed the number paramter but returning a string and after calling
// storing that value on a varibale, is not gonna give us error and it'll return as a string only!
console.log(result);
// ----------------------------------we can return more than one type--------------------------
// here in this function the return type can be a number or boolean, so this will give error, if we give one return type
// function getValue(val: number): number {
//     if(val>5){
//         return val
//     }else{
//         return false
//     }
// }
// --------------------------------------------------------------------------
var getHello = function (s) {
    return "Hello";
};
