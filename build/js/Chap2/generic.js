// function getLength<T>(arg: T): number {
//     if(arg.hasOwnProperty("length")){
//         return arg["length"];
//     }
//     return null;
// }
function getLength(arg) {
    return arg.length;
}
// console.log(getLength<number>(22));
console.log(getLength("Hello World"));
// console.log(getLength(110n))
//# sourceMappingURL=generic.js.map