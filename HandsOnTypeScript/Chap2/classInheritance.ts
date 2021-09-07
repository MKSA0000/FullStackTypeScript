namespace AbstractNamespace {
    abstract class Vehicle {
        constructor(protected WheelCount: number) {}

        abstract updateWheelCount(newWHeelCount: number): void; // Lazily define this function

        showNumberOfWheels() {
            console.log(`moved ${this.WheelCount} miles'`);
        }
    }
    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount: number) {
            this.WheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.WheelCount}`);
        }
    }
    
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }

        updateWheelCount(newWheelCount: number) {
            this.WheelCount = newWheelCount;
            console.log(`Automobile has ${this.WheelCount}`);
        }
    }

    const motor = new Motorcycle();
    motor.updateWheelCount(1);
    const autom = new Automobile();
    autom.updateWheelCount(3);
}

