class Vehicle {
    constructor(protected wheelCount: number) {}

    showNumberOfWheels() {
        //ここのアポストロフィが紛らわしい
        // Good `
        // Bad  '
        console.log(`moved ${this.wheelCount} miles`);
    }
}

class Motorcycle extends Vehicle {
    constructor(){
        super(2)
    }
    updateWheelCount(newWhell: number){
        this.wheelCount = newWhell
    }
}

const mot = new Motorcycle()
mot.showNumberOfWheels()