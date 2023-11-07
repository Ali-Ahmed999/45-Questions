function createCar(manufacturer: string, model: string, color: string, feature?: string): object {
    const carInfo: any = {
        manufacturer: manufacturer,
        model: model,
        color: color,
    };

    if (feature) {
        carInfo.feature = feature;
    }

    return carInfo;
}

const car1 = createCar("Toyota", "Camry", "Blue", "Sunroof");
const car2 = createCar("Honda", "Civic", "Red");
const car3 = createCar("Ford", "Mustang", "Black", "Leather Seats");

console.log(car1);
console.log(car2);
console.log(car3);