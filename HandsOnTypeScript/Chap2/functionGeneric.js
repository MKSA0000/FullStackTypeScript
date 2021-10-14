function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return -1;
}
console.log(getLength(23));
console.log(getLength("Hello World!."));
