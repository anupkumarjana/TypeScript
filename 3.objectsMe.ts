const User = {
  name: "Anup",
  email: "anup@gmail.com",
  isActive: true,
};

// passing params as object
function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Anup", isPaid: true });

// -------------------function returning object-------------------------------------

function createCourse(): { name: string; price: number } {
  return { name: "react.js", price: 2300 };
}

// -------------------storing object in variable and pass as argument----------------

function createUserA({ name: string, isPaid: boolean }) {}

const user = { name: "Anup", isPaid: true };

createUserA(user);

// ---------------------------type aliaces-----------------------------------

type User = {
  // type is a keyword in TypeScript
  // so User is a type
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User): User {
  return user;
}

createUser2({ name: "anup", email: "dj", isActive: false });

// -------------------------readonly keyword-------------------------------------
// when we don't want to  change the value of a variable/object, we use "readonly" keyword

type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number; // so user can have card ot not,  so it is optional. we put "?" mark there
};

let myUser: User1 = {
  _id: "123",
  name: "anup",
  email: "anup@gmail.com",
  isActive: false,
};

myUser.email = "jana@gmail.com";
// myUser._id = "456"; // this will be complaining, because its readonly, we can't chnage its value

// console.log(myUser._id);

// ----------------------------------combining types on another type-----------------------------------------------------

type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDa: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
