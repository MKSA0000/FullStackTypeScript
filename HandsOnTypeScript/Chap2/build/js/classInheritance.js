var AbstractNamespace;
(function (AbstractNamespace) {
    class Vehicle {
        constructor(WheelCount) {
            this.WheelCount = WheelCount;
        }
        showNumberOfWheels() {
            console.log(`moved ${this.WheelCount} miles'`);
        }
    }
    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount) {
            this.WheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.WheelCount}`);
        }
    }
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount) {
            this.WheelCount = newWheelCount;
            console.log(`Automobile has ${this.WheelCount}`);
        }
    }
    const motor = new Motorcycle();
    motor.updateWheelCount(1);
    const autom = new Automobile();
    autom.updateWheelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));
//# sourceMappingURL=classInheritance.js.map