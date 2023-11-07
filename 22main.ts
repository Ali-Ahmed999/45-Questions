let name1 = 'Alice';
let name2 = 'Bob';
let age1 = 25;
let age2 = 30;
let Fruits = ['apple', 'banana', 'cherry'];
let Colors = ['red', 'green', 'blue'];
let isSunny = true;
let isRainy = false;

// Tests for equality and inequality with strings
console.log("Equality Tests with Strings:");
console.log(name1 === name2);  // Expect False because name1 is not equal to name2.
console.log(name1 !== name2);  // Expect True because name1 is not equal to name2.

// Tests using the lower case function
console.log("\nString Case Tests:");
console.log(name1.toLowerCase() === 'alice');  // Expect True because the lowercase of name1 is 'alice'.

// Numerical tests
console.log("\nNumerical Tests:");
console.log(age1 > age2);    // Expect False because age1 is not greater than age2.
console.log(age1 < age2);    // Expect True because age1 is less than age2.
console.log(age1 >= age2);   // Expect False because age1 is not greater than or equal to age2.
console.log(age1 <= age2);   // Expect True because age1 is less than or equal to age2.

// Tests using "and" and "or" operators
console.log("\nLogical Tests:");
console.log(isSunny && isRainy);  // Expect False because both conditions are not true (logical AND).
console.log(isSunny || isRainy);  // Expect True because at least one condition is true (logical OR).

// Test whether an item is in an array
console.log("\nArray Membership Tests:");
console.log(fruits.indexOf('cherry') !== -1);  // Expect True because 'cherry' is in the fruits array.


// Test whether an item is not in an array
console.log(colors.indexOf('yellow') === -1);  // Expect True because 'yellow' is not in the colors array.