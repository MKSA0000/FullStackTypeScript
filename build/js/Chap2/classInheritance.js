var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(WheelCount) {
            this.WheelCount = WheelCount;
        }
        Vehicle.prototype.showNumberOfWheels = function () {
            console.log("moved " + this.WheelCount + " miles'");
        };
        return Vehicle;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            return _super.call(this, 2) || this;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.WheelCount = newWheelCount;
            console.log("Motorcycle has " + this.WheelCount);
        };
        return Motorcycle;
    }(Vehicle));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateWheelCount = function (newWheelCount) {
            this.WheelCount = newWheelCount;
            console.log("Automobile has " + this.WheelCount);
        };
        return Automobile;
    }(Vehicle));
    var motor = new Motorcycle();
    motor.updateWheelCount(1);
    var autom = new Automobile();
    autom.updateWheelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));
//# sourceMappingURL=classInheritance.js.map