let car = 'subaru';

// Test 1: Is car equal to 'subaru'? Expect True.
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');  // It will be True because car is equal to 'subaru'.

// Test 2: Is car equal to 'honda'? Expect False.
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');  // It will be False because car is not equal to 'honda'.

let age = 18;

// Test 3: Is age less than 21? Expect True.
console.log("Is age < 21? I predict True.");
console.log(age < 21);  // It will be True because age is less than 21.

// Test 4: Is age greater than or equal to 21? Expect False.
console.log("Is age >= 21? I predict False.");
console.log(age >= 21);  // It will be False because age is not greater than or equal to 21.

let hasPermission = false;

// Test 5: Does hasPermission equal true? Expect False.
console.log("Does hasPermission equal true? I predict False.");
console.log(hasPermission === false);  // It will be False because hasPermission is false.

// Test 6: Is the type of age 'number'? Expect True.
console.log("Is the type of age 'number'? I predict True.");
console.log(typeof age === 'number');  // It will be True because the type of age is 'number'.

let fruits = ['apple', 'banana', 'cherry'];

// Test 7: Does fruits array include 'banana'? Expect True.
console.log("Does fruits include 'banana'? I predict True.");
console.log(fruits.includes('banan'));  // It will be True because 'banana' is in the array.

// Test 8: Is the length of fruits array not equal to 4? Expect True.
console.log("Is the length of fruits array != 4? I predict True.");
console.log(fruits.length !== 4);  // It will be True because the length is 3, not 4.

let language = 'JavaScript';

// Test 9: Is language not equal to 'TypeScript'? Expect True.
console.log("Is language != 'TypeScript'? I predict True.");
console.log(language !== 'TypeScript');  // It will be True because language is not 'TypeScript'.

// Test 10: Is car equal to 'Subaru' (case-sensitive comparison)? Expect False.
console.log("Is car == 'Subaru'? I predict False.");
console.log(car === 'Subaru');  // It will be False because of case sensitivity.