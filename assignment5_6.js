// Define the Car class
class Car {
    // Constructor method to create a new car
    constructor(brand, model, year, color, price, gas) {
        // Assign the provided values to the car properties
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    // Method to make the car honk and show its details
    honk() {
        // Print a simple honking message with car details
        console.log(`Honk honk! This is a ${this.year} ${this.brand} ${this.model} in ${this.color} color, priced at $${this.price}`);
    }
}

// Create car instances using the Car class
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Call the honk method for each car to make them honk
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Simulate a 7-turn race
for (let turn = 1; turn <= 7; turn++) {
    console.log(`\nTurn ${turn}:`);

    // Update gas for each car based on the race conditions
    [car1, car2, car3, car4, car5, car6].forEach((car) => {
        // New cars lose 5 liters, and older cars lose additional liters based on their age
        const gasLoss = 5 + Math.max(0, car.year - 2023);

        // Reduce gas for the current car
        car.gas -= gasLoss;

        // Display gas remaining after the turn
        console.log(`${car.year} ${car.brand} ${car.model} has ${car.gas} liters of gas remaining.`);
    });
}