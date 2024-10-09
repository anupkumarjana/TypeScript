# TypeScript Basics

This guide covers essential TypeScript concepts including types, functions, objects, and more, with examples for better understanding.

---

## 1. Variables and Types

TypeScript automatically infers the type of a variable based on the assigned value, but you can also explicitly declare the type.

```ts
let greeting: string = "Hi, this is Anup";
let myAge: number = 26;
let isDeveloper: boolean = true;

let userId = 568644;   // TypeScript infers the type
let userName = "Anup Kumar Jana";
let userIsAdmin = true;

console.log(greeting, myAge, isDeveloper);
```

---

## 2. The `any` Type

Use `any` when you don't want to define a specific type, but it's discouraged in TypeScript to ensure type safety.

```ts
let obj: any = { name: "jana" };
console.log(obj);
```

---

## 3. Functions

### a. **Number Parameter**

```ts
function addTwo(num: number): number {
  return num + 2;
}
addTwo(10);
```

### b. **String Parameter**

```ts
function getUpperCase(val: string): string {
  return val.toUpperCase();
}
getUpperCase("happy, happy, happy");
```

### c. **Multiple Parameters**

```ts
function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
  console.log(name, email, password, isPaid);
}
signUpUser("Anup", "anup@gmail.com", "123456", true);
```

### d. **Arrow Function with Default Value**

```ts
let loginUser = (name: string, email: string, password: string, isPaid: boolean = false) => {
  console.log(name, email, password, isPaid);
};
loginUser("Anup", "anup@gmail.com", "51654");  // Default `isPaid` is false
```

---

## 4. Return Types

### a. **Typed Return**

```ts
function addThree(num: number): number {
  return num + 2;
}
let result = addThree(10);
console.log(result);
```

### b. **Multiple Return Types**

```ts
const getHello = (s: string): string => {
  return "Hello";
};
```

### c. **Returning Objects**

```ts
function createCourse(): { name: string; price: number } {
  return { name: "react.js", price: 2300 };
}
```

---

## 5. Arrays and Map

Use `.map()` for iterating over arrays.

```ts
const heros = ["thor", "hulk", "loki"];
heros.map((hero): string => {
  return hero;
});
```

---

## 6. Special Function Return Types

### a. **Void**

For functions that don’t return any value.

```ts
function consoleError(err: string): void {
  console.log(err);
}
```

### b. **Never**

For functions that never return, e.g., throwing an error.

```ts
function handleError(err: string): never {
  throw new Error(err);
}
```

---

## 7. Objects

### a. **Function with Object as Parameters**

```ts
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
createUser({ name: "Anup", isPaid: true });
```

### b. **Storing Objects in Variables and Passing as Arguments**

```ts
const user = { name: "Anup", isPaid: true };
function createUserA(user: { name: string; isPaid: boolean }) {}
createUserA(user);
```

---

## 8. Type Aliases

Type aliases allow you to define custom types. Example:

```ts
export {};
```
