"use strict";
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`Shirt size: ${size}`);
    console.log(`Message on the shirt: ${message}`);
}
// Call the function with default values
make_shirt(); // Large shirt with the default message
// Call the function with a medium shirt and the default message
make_shirt('Medium');
// Call the function with a small shirt and a different message
make_shirt('Small', 'TypeScript is awesome');
