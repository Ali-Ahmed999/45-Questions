function make_great1(magicians: string[]): string[] {
    const greatMagicians = magicians.map((magician) => magician + ' the Great');
    return greatMagicians;
}

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const Magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

const greatMagicians = make_great(magicians);
show_magicians(greatMagicians);