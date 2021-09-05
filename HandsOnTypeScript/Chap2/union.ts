let obj : {name: string } & { age: number} = {
    name: 'tom',
    age: 25
}
console.log(obj)

let unionobj: null | {name: string} & {age: number} = {
    name: 'Uni',
    age: 2434
}
console.log(unionobj)

let literal: "tom" | "linda" | 32 | "jeff" | "sue"
literal = 32
console.log(literal)

type grades =  20 | 30 | 40 | 50
let score:grades = 30
let sscore:typeof literal = 32
console.log(score,sscore)

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}

function runMore(distance: number): number {
    return distance + 10
}

let nv: never
console.log(nv)