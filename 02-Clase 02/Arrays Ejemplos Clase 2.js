let myArray = []


console.log(Array.isArray(myArray))
console.log(Array.isArray([]))


console.log(myArray)
myArray.push(0)
myArray.push(2)
myArray.push(1)
myArray.push(3)
myArray.push(4)
myArray.push(3)
myArray.push('HOLA')
let myArray2 = [...myArray] 
console.log(myArray)

console.log(myArray.find(elemento=>elemento == 3))
console.log(myArray.find(o=>o == 2))
console.log(myArray.find(nombreVariable=>nombreVariable > 3))
console.log(myArray.indexOf(3))
console.log(myArray.lastIndexOf(9))

console.log(myArray.sort( (a, b) => {
    return b - a
}
))

console.log(myArray)

myArray = [...myArray.map(o => o + 10)]
console.log(myArray.map(o => o + 10))

console.log(myArray.shift())
console.log(myArray.shift())
console.log(myArray.shift())
console.log(myArray.shift())
console.log(myArray)

console.log(myArray2)
console.log(myArray2.unshift(5))
console.log(myArray2.unshift(6))
console.log(myArray2.unshift(7))
console.log(myArray2.unshift(8))
console.log(myArray2)
console.log(myArray2.unshift())


const persona1 = {
    nombre : 'Eduardo',
    edad : 41
}
const persona2 = {
    nombre : 'Gustavo',
    edad : 43
}
const persona3 = {
    nombre : 'Berta',
    edad : 68
}

const personas = [persona1, persona2, persona3]

var p = personas.find(o=> o.edad > 40)
console.log(p)

console.log(personas.filter(o=> o.edad > 41))