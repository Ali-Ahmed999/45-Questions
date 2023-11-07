function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map((magician) => magician + ' the Great');
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const Magicians1: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Create a copy of the original array
const copiedMagicians = magicians.slice();

// Call make_great() with the copied array
const greatMagicians1 = make_great(copiedMagicians);

// Display the original magicians
console.log('Original Magicians:');
show_magicians(magicians);

// Display the great magicians
console.log('\nGreat Magicians:');
show_magicians(greatMagicians);