let greeting: string = "Hi, this is Anup";
let myAge: number = 26;
let isDeveloper: boolean = true;

// there's no need to explicitly declare the data-type of a variable,
// typescript will autimatically detects the type based on the assigned value.

// This is also valid in TypeScript
let userId = 568644;
let userName = "Anup Kumar Jana";
let userIsAdmin = true;

console.log(greeting);
console.log(myAge);
console.log(isDeveloper);

export { greeting, myAge, isDeveloper };


// -------------------------------------------------------------------------------------------------

// "any" datatype
// we use datatype as "any" when we don't want to set any datatype to an variable
// we should not use this in our code.

let obj:any ={name:"jana"}

console.log(obj);
