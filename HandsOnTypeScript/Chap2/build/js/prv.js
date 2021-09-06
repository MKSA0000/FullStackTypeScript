class Person {
    constructor(msg) {
        this.msg = msg;
    }
    speak() {
        console.log(this.msg);
    }
}
const tom = new Person("hello typescript");
tom.speak();
class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}
const speaker = new Speaker('john');
speaker.Message = "Hello";
console.log(speaker.Message);
//# sourceMappingURL=prv.js.map