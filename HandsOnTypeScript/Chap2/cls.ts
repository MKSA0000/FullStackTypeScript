class Person {
    constructor() {}
    msg: string;
    speak() {
        console.log(this.msg)
    }
}

const tom = new Person(); 
tom.msg = "hello tom";
tom.speak()