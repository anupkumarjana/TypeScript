"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Anup",
    email: "anup@gmail.com",
    isActive: true,
};
// passing params as object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Anup", isPaid: true });
// -------------------function returning object-------------------------------------
function createCourse() {
    return { name: "react.js", price: 2300 };
}
// -------------------storing object in variable and pass as argument----------------
function createUserA(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var user = { name: "Anup", isPaid: true };
createUserA(user);
function createUser2(user) {
    return user;
}
createUser2({ name: "anup", email: "dj", isActive: false });
var myUser = {
    _id: "123",
    name: "anup",
    email: "anup@gmail.com",
    isActive: false,
};
myUser.email = "jana@gmail.com";
// myUser._id = "456"; // this will be complaining, because its readonly, we can't chnage its value
console.log(myUser._id);
