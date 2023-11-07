"use strict";
function make_great1(magicians) {
    const greatMagicians = magicians.map((magician) => magician + ' the Great');
    return greatMagicians;
}
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const Magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
const greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
