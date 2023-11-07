const Names: string[] = ["Saud", "Naveed", "Hussain", "Abrar"];
const greetingMessage: string = "Hello, ";

// Print personalized greetings to each person
names.forEach((name) => {
    console.log(`${greetingMessage}${name}!`);
});