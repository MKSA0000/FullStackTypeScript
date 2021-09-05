var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person();
tom.msg = "hello tom";
tom.speak();
//# sourceMappingURL=cls.js.map