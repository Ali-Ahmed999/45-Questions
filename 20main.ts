const colors: string[] = ["red", "green", "blue"];

// Intentionally access an out-of-range index
const index = 3;
const color = colors[index]; // This will produce an "undefined" error

// To correct the error, we can check if the index is valid
if (index >= 0 && index < colors.length) {
    const correctedColor = colors[index];
    console.log(`Color at index ${index}: ${correctedColor}`);
} else {
    console.log("Index is out of range.");
}