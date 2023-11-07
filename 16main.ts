const placesToVisit: string[] = [
    "Paris",
    "Tokyo",
    "Machu Picchu",
    "Sydney",
    "Santorini"
];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(placesToVisit.slice().sort());

// Show that your array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

// Show that your array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Reverse the order of your list. Print the array to show that its order has changed
console.log("\nReversed order:");
console.log(placesToVisit.slice().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("\nReversed order again (back to original order):");
console.log(placesToVisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit.slice().sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());