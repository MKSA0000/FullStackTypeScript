var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("hello typescript");
tom.speak();
var Speaker = /** @class */ (function () {
    function Speaker(name) {
        this.name = name;
    }
    Object.defineProperty(Speaker.prototype, "Message", {
        get: function () {
            if (!this.message.includes(this.name)) {
                throw Error("message is missing speaker's name");
            }
            return this.message;
        },
        set: function (val) {
            var tmpMessage = val;
            if (!val.includes(this.name)) {
                tmpMessage = this.name + " " + val;
            }
            this.message = tmpMessage;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
var speaker = new Speaker('john');
speaker.Message = "Hello";
console.log(speaker.Message);
//# sourceMappingURL=prv.js.map