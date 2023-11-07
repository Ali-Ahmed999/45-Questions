const favorite_fruits: string[] = ["bananas", "strawberries", "apples"];
const fruitsToCheck: string[] = ["bananas", "kiwis", "pears", "mangoes", "apples"];

for (let fruit of fruitsToCheck) {
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log(`You really like ${fruit}!`);
    }
}