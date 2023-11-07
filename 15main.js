"use strict";
const Guests1 = ["Naveed", "Saud", "Hussain", "Abrar", "Asad"];
console.log("You can invite only two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}
for (const guest of guests) {
    console.log(`You're still invited to dinner, ${guest}.`);
}
guests.length = 0; // Empty the list
console.log("Empty guest list:", guests);
