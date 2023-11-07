function makeSandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    for (const ingredient of ingredients) {
        console.log("- " + ingredient);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function with different sets of ingredients
makeSandwich("Lettuce", "Tomato", "Turkey", "Mayo");
makeSandwich("Ham", "Cheese", "Mustard");
makeSandwich("Peanut Butter", "Jelly");