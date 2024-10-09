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
