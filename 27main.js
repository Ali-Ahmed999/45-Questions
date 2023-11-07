"use strict";
const favorite_fruits = ["bananas", "strawberries", "apples"];
const fruitsToCheck = ["bananas", "kiwis", "pears", "mangoes", "apples"];
for (let fruit of fruitsToCheck) {
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log(`You really like ${fruit}!`);
    }
}
