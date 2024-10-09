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

export {};
