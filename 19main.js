"use strict";
// Define an array of city objects
const cities = [
    {
        name: "New York City",
        population: 8175133,
        country: "USA",
    },
    {
        name: "Paris",
        population: 2140526,
        country: "France",
    },
    {
        name: "Tokyo",
        population: 13929286,
        country: "Japan",
    },
];
// Print information about each city
for (const city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Population: ${city.population}`);
    console.log(`Country: ${city.country}`);
    console.log();
}
