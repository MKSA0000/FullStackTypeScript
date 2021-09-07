function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return null;
}
console.log(getLength(22));
console.log(getLength("Hello World"));
console.log(getLength(110n));
//# sourceMappingURL=generic.js.map