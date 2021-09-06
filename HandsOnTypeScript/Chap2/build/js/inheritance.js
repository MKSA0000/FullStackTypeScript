class Vehicle {
    constructor(wheelCount) {
        this.wheelCount = wheelCount;
    }
    showNumberOfWheels() {
        //ここのアポストロフィが紛らわしい
        // Good `
        // Bad  '
        console.log(`moved ${this.wheelCount} miles`);
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(2);
    }
    updateWheelCount(newWhell) {
        this.wheelCount = newWhell;
    }
}
const mot = new Motorcycle();
mot.showNumberOfWheels();
//# sourceMappingURL=inheritance.js.map